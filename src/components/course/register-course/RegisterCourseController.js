import React, { useState } from "react";
import { RegisterCourseView } from "./RegisterCourseView";
import { apiClient } from "../../../api";
import { notification } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

export const RegisterCourseController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const { courseId } = useParams();

  const handleSubmit = () => {
    if (isEmpty(user)) return history.push("/login");
    console.log("user", user);
    setLoading(true);
    console.log("classId", courseId);
    apiClient
      .post("/v1/class/register", { user_id: user.id, class_id: courseId })
      .then(() => {
        setLoading(false);
        notification.success({ message: "Thêm thành công", duration: 1.5 });
        setTimeout((params) => {
          history.push(`/my-all-courses/${user.id}`);
        }, 1500);
      })
      .catch((error) => {
        console.log("error", error.response);
        setError(error.response.data.error);
      });
  };

  return (
    <RegisterCourseView
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};
