import React, { useState } from "react";
import { AddReadingView } from "./AddReadingView";
import { apiClient } from "../../../api";
import { notification } from "antd";

export const AddReadingController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const handleSubmit = (data) => {
    setLoading(true);
    apiClient
      .post("/v1/question/add", { ...data })
      .then((data) => {
        console.log("data", data);
        notification.success({ message: "Thêm thành công", duration: 1500 });
        setTimeout(() => {
          window.location.href = "../readings";
        }, 1500);
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
    <AddReadingView onSubmit={handleSubmit} loading={loading} error={error} />
  );
};
