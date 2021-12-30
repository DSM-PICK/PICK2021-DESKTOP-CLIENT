import instance, { request } from "../Default";

export const searchStudents = async (name: string) => {
  try {
    const req = await instance.get(`/teacher/student?name=${name}`);
    return req;
  } catch (error) {
    throw error;
  }
};

export const getAttendanceChangeList = async () => {
  try {
    const req = await instance.get("/attendance");
    return req;
  } catch (error) {
    throw error;
  }
};

export const postAttendanceChange = async() => {
  try {

  } catch {
    
  }
}