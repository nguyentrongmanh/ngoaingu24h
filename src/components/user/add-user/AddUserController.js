import React, { useState } from "react";
import { AddUserView } from "./AddUserView";
import { apiClient } from "../../../api";

export const AddUserController = () => {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState()
  const handleSubmit = (data) => {
    setLoading(true);
    apiClient
      .post("/v1/user/add", { ...data })
      .then((data) => {
        console.log("data", data);
        window.location.href = "../users";
      })
      .catch((error) => {
        console.log("error", error.response);
        setError(error.response.data.error)
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return <AddUserView onSubmit={handleSubmit} loading={loading} error={error} />;
};
