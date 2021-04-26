import request from './request'
import {LOCAL_TOKEN_NAME} from './const'


export async function checkToken(token){
    const {data} = await request.post(
        "/checkToken", 
        {
            data: {
                token: token
            }
        }
    )
    // return {
    //     status: false,
    //     token: null
    // }
    const obj = {
        status: data.valid,
        token: token
    }
    console.log(obj)
    return obj
};

export const hasLocalToken = localStorage.getItem(LOCAL_TOKEN_NAME) != null;