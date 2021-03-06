import React, { useState } from "react";
import { AddListeningView } from "./AddListeningView";
import { apiClient } from "../../../api";
import { notification } from "antd";
import { useHistory } from "react-router-dom";

export const AddListeningController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();
  const handleSubmit = (data) => {
    setLoading(true);
    console.log('data', data)
    const formData = new FormData();
    formData.append("audio", data.audio);
    formData.append("type", 2);
    formData.append("answer", data.answer);

    apiClient({
      method: "post",
      url: "/v1/question/add",
      data: formData,
    })
      .then(() => {
        notification.success({ message: "Thêm thành công", duration: 1.5 });
        setTimeout(() => {
          history.push("/dashboard/listenings");
          // window.location.href = "../listenings";
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
    <AddListeningView onSubmit={handleSubmit} loading={loading} error={error} />
  );
};
