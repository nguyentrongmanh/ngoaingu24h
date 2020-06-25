import React from "react";
import { Button } from "antd";

export const SubmitExamView = ({ onSubmit }) => {
  return (
    <Button
      style={{ marginBottom: "16px" }}
      type="primary"
      block
      onClick={onSubmit}
    >
      Nộp bài
    </Button>
  );
};
