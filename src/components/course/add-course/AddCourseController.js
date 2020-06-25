import React, { useState } from "react";
import { AddCourseView } from "./AddCourseView";
import { apiClient } from "../../../api";
import { notification } from "antd";
import { useHistory } from "react-router-dom";

export const AddCourseController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();
  const handleSubmit = (data) => {
    setLoading(true);
    console.log("data", data);
    const formData = new FormData();
    // eslint-disable-next-line no-unused-vars
    for (const k in data) {
      formData.append(k, data[k]);
    }
    apiClient({
      method: "post",
      url: "/v1/class/add",
      data: formData,
    })
      .then(() => {
        setLoading(false);
        notification.success({ message: "Thêm thành công", duration: 1.5 });
        setTimeout((params) => {
          history.push("/dashboard/courses");
        }, 1500);
      })
      .catch((error) => {
        console.log("error", error.response);
        setError(error.response.data.error);
      });
  };

  return (
    <AddCourseView onSubmit={handleSubmit} loading={loading} error={error} />
  );
};
