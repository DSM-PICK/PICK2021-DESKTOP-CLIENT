import { getRequestWithToken } from "../Default";

export const getSchedules = async (access_token: string, year: number, month: number) => {
  try {
    const request = getRequestWithToken(access_token);
    await request.get(`/schedule/list/$${year}/${month}`);
  } catch (error) {
    throw error;
  }
};
