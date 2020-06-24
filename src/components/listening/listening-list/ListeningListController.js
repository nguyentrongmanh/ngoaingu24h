import React, { useEffect, useState } from "react";
import { ListeningListView } from "./ListeningListView";
import { apiClient } from "../../../api";

export const ListeningListController = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/v1/question/list", { params: { type: 2 } })
      .then(({ data }) => {
        console.log("data", data);
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <ListeningListView data={data} loading={loading} />;
};
