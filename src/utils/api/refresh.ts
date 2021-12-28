import axios, { AxiosRequestConfig } from "axios";
import { request } from "./Default";

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hour);
  return date;
};

export const refresh = async (config: AxiosRequestConfig) => {
  const expireAt = localStorage.getItem("expireAt");
  let accessToken = localStorage.getItem("access_token");
  let refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken || !expireAt) {
    window.location.href = "/login";
    localStorage.removeItem("expireAt");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return config;
  }

  if (new Date().getDate() > new Date(expireAt).getDate()) {
    //엑세스 토큰 완료
    const data = {
      refresh_token: refreshToken,
    };

    try {
      const { access_token, refresh_token } = (
        await request.post("/auth", data)
      ).data;
      
      accessToken = access_token;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("expireAt", getDateWithAddHour(2).toString());
    } catch {
      //리프레시 토큰 만료
      window.location.href = "/";
      localStorage.removeItem("expireAt");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      return config;
    }
  }
};

export const refreshError = (err: any) => {
  localStorage.removeItem("expireAt");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
