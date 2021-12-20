import { getRequestWithToken, baseURL } from "../Default";

export const getSchedules = async (access_token: string, year: number, month: number) => {
  try {
    const request = getRequestWithToken(access_token);
    await request.get(`${baseURL}/schedule/list/$${year}/${month}`);
  } catch (error) {
    throw error;
  }
};
