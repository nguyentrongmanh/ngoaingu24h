import React, { useEffect, useState } from "react";
import { LessonListCardView } from "./LessonListCardView";
import { LessonListTableView } from "./LessonListTableView";
import { apiClient } from "../../../api";
import { useParams } from "react-router-dom";

export const LessonListController = ({ viewType }) => {
  const { courseId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/v1/lesson/list/${courseId}`)
      .then(({ data }) => {
        console.log("data", data);
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, [courseId]);
  if (viewType && viewType === "for-user") {
    return <LessonListCardView data={data} loading={loading} />;
  }
  return <LessonListTableView data={data} loading={loading} />;
};
