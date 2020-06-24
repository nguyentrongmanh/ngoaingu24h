import React, { useState, useEffect } from "react";
import { CourseDetailView } from "./CourseDetailView";
import { useParams } from "react-router-dom";
import { apiClient } from "../../../api";

export const CourseDetailController = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/v1/class/detail/${id}`)
      .then(({ data }) => {
        console.log("data", data);
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      <CourseDetailView course={data} loading={loading} />
    </>
  );
};
