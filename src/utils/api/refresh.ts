import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { request } from "./Default";

export const refresh = async (config: AxiosRequestConfig) => {
  let accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  if(!accessToken) {
    window.location.href = "/login";
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return config;
  }

  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

export const refreshError = (err: AxiosError) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
