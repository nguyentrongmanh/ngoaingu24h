import React from "react";
import { AddExerciseView } from "./AddExerciseView";
import { apiClient } from "../../../api";

export const AddExerciseController = ({ lessonId, onSuccess = () => {} }) => {
  const handleAddExercise = async (data) => {
    return new Promise((resolve, reject) => {
      apiClient
        .post("/v1/exam/add", { ...data, lesson_id: lessonId })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          console.log("error", error.response);
          reject();
        });
    });
  };

  return (
    <AddExerciseView onAddExercise={handleAddExercise} />
  );
};
