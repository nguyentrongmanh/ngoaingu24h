import React, { useState } from "react";
import { AddListeningView } from "./AddListeningView";
import { apiClient } from "../../../api";

export const AddListeningController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const handleSubmit = (data) => {
    setLoading(true);
    apiClient
      .post("/v1/question/add", { ...data })
      .then((data) => {
        console.log("data", data);
        // window.location.href = "../users";
      })
      .catch((error) => {
        console.log("error", error.response);
        setError(error.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AddListeningView onSubmit={handleSubmit} loading={loading} error={error} />
  );
};
