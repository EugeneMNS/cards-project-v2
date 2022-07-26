import {AxiosResponse} from "axios";
import {instance} from "../../api/api";

export const authAPI = {
    me(){
        return instance.post('auth/me', {})
    },
    auth(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<GetMeResponseType<{userId: number}>>>('auth/login', data)
    },
    logout(){
        return instance.delete<ResponseType>('auth/me')
    }
}

//types
export type GetMeResponseType<D = {}> = {
    _id: string;
    email: string;
    name: string;
    avatar: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
    token: string
    tokenDeathTime: number
    data: D
    __v: number,
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type ResponseType<D = {}> = {
    error: string
    info: string
    data: D
}
