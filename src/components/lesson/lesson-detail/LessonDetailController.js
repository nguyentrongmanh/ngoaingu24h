import React, { useState, useEffect } from "react";
import { LessonView } from "./LessonView";
import { useParams } from "react-router-dom";
import { apiClient } from "../../../api";

export const LessonDetailController = () => {
  const { lessonId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/v1/lesson/detail/${lessonId}`)
      .then(({ data }) => {
        console.log("data", data);
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, [lessonId]);

  return <LessonView lesson={data} loading={loading} />;
};
