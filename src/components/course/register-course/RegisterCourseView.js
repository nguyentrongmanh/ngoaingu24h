import React from "react";
import { Button } from "antd";

export const RegisterCourseView = ({ onSubmit, loading }) => {
  return (
    <Button type="primary" onClick={onSubmit} loading={loading}>
      Đăng kí
    </Button>
  );
};
