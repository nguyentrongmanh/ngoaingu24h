import React, { useEffect, useState } from "react";
import { TeacherListSelectView } from "./TeacherListSelectView";
import { apiClient } from "../../api";

export const TeacherListController = ({ onSelect = () => {} }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/v1/teacher/list")
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <TeacherListSelectView data={data} loading={loading} onSelect={onSelect} />
  );
};
