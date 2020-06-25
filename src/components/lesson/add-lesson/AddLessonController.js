import React, { useState } from "react";
import { AddLessonView } from "./AddLessonView";
import { apiClient } from "../../../api";

export const AddLessonController = ({ courseId }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();
  const handleAddLesson = (data) => {
    setLoading(true);
    console.log("data", data);
    apiClient
      .post("/v1/lesson/add", { ...data, class_id: courseId })
      .then(() => {
        setSuccess(true);
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
    <AddLessonView
      success={success}
      loading={loading}
      onAddLesson={handleAddLesson}
    />
  );
};
