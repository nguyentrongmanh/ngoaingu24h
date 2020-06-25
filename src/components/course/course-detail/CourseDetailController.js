import React, { useState, useEffect } from "react";
import { CourseDetailView } from "./CourseDetailView";
import { useParams } from "react-router-dom";
import { apiClient } from "../../../api";

export const CourseDetailController = () => {
    const { courseId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      apiClient
        .get(`/v1/class/detail/${courseId}`)
        .then(({ data }) => {
          console.log("data", data);
          setData(data.data);
        })
        .catch((error) => console.log("error", error))
        .finally(() => {
          setLoading(false);
        });
    }, [courseId]);
  return (
    <>
      <CourseDetailView course={data} loading={loading} />
    </>
  );
};
