import axios from "axios";
import config from "./config";

export const apiClient = axios.create({
  baseURL: config.baseApiUrl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
