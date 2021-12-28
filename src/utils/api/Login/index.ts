import { request } from "../Default/index";

export const loginRequest = async (
  id: string | undefined,
  password: string | undefined
) => {
  try {
    const data = {
      id: id,
      password: password,
    };
    const req = await request.post("teacher/login", data);
    localStorage.setItem("access_token", req.data.access_token);
    localStorage.setItem("refresh_token", req.data.refresh_token);
    localStorage.setItem("teacher_id", req.data.teacher_id);
    return req;
  } catch (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
};
