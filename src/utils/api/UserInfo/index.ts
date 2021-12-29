import { getRequestWithToken } from "../Default"

export const getUserInfo = async (token: string, teacher_id:string) => {
    try{
        const getRequest = getRequestWithToken(token)
        const request = await getRequest.get(`/teacher/${teacher_id}/information`)
        return request;
    }
    catch(error){
        return Promise.reject(error);
    }
}