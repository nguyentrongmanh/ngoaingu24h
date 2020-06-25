import React, { useEffect, useState } from "react";
import { ReadingListView } from "./ReadingListTableView";
import { apiClient } from "../../../api";

export const ReadingListController = ({ onChange }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/v1/question/list", { params: { type: 1 } })
      .then(({ data }) => {
        console.log("data", data);
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <ReadingListView data={data} loading={loading} onSelect={onChange} />;
};
