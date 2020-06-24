import React, { useState } from "react";
import { RegisterView } from "./RegisterView";
import { apiClient } from "../../../api";
import { useHistory } from "react-router-dom";
import { notification } from "antd";

export const RegisterController = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleRegister = (data) => {
    setLoading(true);
    apiClient
      .post("/v1/register", { ...data })
      .then((data) => {
        console.log("data", data);
       
      })
      .catch((error) => {
        console.log("error.response", error.response);

        notification.error({
          message: error.response.data.message,
          duration: 2,
        });
      })
      .finally(() => {
        setLoading(false);
      });
    console.log("data", data);
    // console.log(res);
    // if (res.status === 200) {
    //   dispatch(signin(res.data.user));
    //   history.push("/");
    // }
    // return;
  };
  return <RegisterView onSubmit={handleRegister} loading={loading} />;
};
