import React, { useEffect, useState } from "react";
import { UserListView } from "./UserListView";
import { apiClient } from "../../../api";

export const UserListController = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/v1/user/list")
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <UserListView data={data} loading={loading} />;
};
