import instance from "../Default"

export const getLocationList = async (token: string) => {
    try{
        const request = await instance.get('/location/3');
        return request;
    }
    catch(error){
        return Promise.reject(error);
    }
}