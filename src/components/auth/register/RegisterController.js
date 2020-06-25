import React, { useState } from "react";
import { apiClient } from "../../../api";
import { useHistory } from "react-router-dom";
import { notification } from "antd";
import { RegisterView } from "./RegisterView";

export const RegisterController = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleRegister = (data) => {
    setLoading(true);
    apiClient
      .post("/v1/register", { ...data })
      .then((data) => {
        console.log("data", data);
        setLoading(false);
        notification.success({ message: "Đăng kí thành công", duration: 1.5 });
        setTimeout(() => {
          history.push("/login");
        }, 1500);
      })
      .catch((error) => {
        console.log("error.response", error.response);
        setError(error.response.data.error);
      });

    console.log("data", data);
    // console.log(res);
    // if (res.status === 200) {
    //   dispatch(signin(res.data.user));
    //   history.push("/");
    // }
    // return;
  };
  return (
    <RegisterView onSubmit={handleRegister} loading={loading} error={error} />
  );
};
