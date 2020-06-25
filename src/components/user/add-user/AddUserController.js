import React, { useState } from "react";
import { AddUserView } from "./AddUserView";
import { apiClient } from "../../../api";

export const AddUserController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const handleSubmit = (data) => {
    setLoading(true);

    const formData = new FormData();
    // eslint-disable-next-line no-unused-vars
    for (const key in data) {
      formData.append(key, data[key]);
    }
    apiClient({
      method: "post",
      url: "/v1/user/add",
      data: formData,
    })
      .then((data) => {
        window.location.href = "../users";
      })
      .catch((error) => {
        console.log("error", error.response);
        setError(error.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AddUserView onSubmit={handleSubmit} loading={loading} error={error} />
  );
};
