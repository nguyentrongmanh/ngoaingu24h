import React from "react";
import { SubmitExamView } from "./SubmitExamView";
import { apiClient } from "../../../api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const SubmitExamController = ({ score, onResult = () => {} }) => {
  const { examId } = useParams();
  const user = useSelector((state) => state.user);

  const handleSubmitExam = async () => {
    return new Promise((resolve, reject) => {
      apiClient
        .post("/v1/user_test/add", { user_id: user.id, exam_id: examId, score })
        .then(({data}) => {
          onResult(data);
          resolve();
        })
        .catch((error) => {
          console.log("error", error.response);
          reject();
        });
    });
  };
  return <SubmitExamView onSubmit={handleSubmitExam} />;
};
