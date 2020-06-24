import React, { useState } from "react";
import { LoginView } from "./LoginView";
import { signin } from "../../../reducers/action/UserAction";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiClient } from "../../../api";
import { notification } from "antd";

export const LoginController = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = (data) => {
    setLoading(true);
    apiClient
      .post("/v1/login", { ...data })
      .then(({ data }) => {
        setLoading(false);
        dispatch(signin(data));
        history.push("/");
      })
      .catch((error) => {
        setError(error.response);
        notification.error({
          message: error.response.data.message,
          duration: 2,
        });
      });
  };
  return <LoginView onSubmit={handleLogin} loading={loading} error={error} />;
};
