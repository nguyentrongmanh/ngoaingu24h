import React, { useEffect } from "react";
import "./styles/index.css";
import "./styles/auth.css";
import "antd/dist/antd.css";
import Routers from "./Routers";
import { apiClient } from "./api";
import { signin } from "./reducers/action/UserAction";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    apiClient.get("/v1/current_user").then(({ data }) => {
      dispatch(signin(data));
    });
  });
  return <Routers></Routers>;
}

export default App;
