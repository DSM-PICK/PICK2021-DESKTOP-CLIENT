import axios, { AxiosError } from "axios";
import { refresh, refreshError } from "../refresh";

axios.defaults.baseURL = "https://api-2021.dsm-pick.com";

export const request = axios.create({
  timeout: 10000,
  withCredentials: true,
});

export const getRequestWithToken = (
  token: string,
  type: "json" | "blob" | "text" = "json"
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "test",
    headers: {
      Authorization: `Bearer ${token}`,
      withCredentials: true,
    },
    responseType: type,
    withCredentials: true,
  });

  return request;
};

const instance = axios.create({
  timeout: 100000,
});

instance.interceptors.request.use(refresh, refreshError);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default instance;
