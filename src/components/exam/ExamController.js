import React, { useState, useEffect } from "react";
import { ExamView } from "./ExamView";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api";
import { TestDetailView } from "./TestDetailView";

export const ExamController = ({ type }) => {
  const { examId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/v1/exam/detail/${examId}`)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  }, [examId]);
  if (type && type === "test")
    return <TestDetailView exam={data} loading={loading} />;

  return <ExamView exam={data} loading={loading} />;
};
