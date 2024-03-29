import axios from 'axios';

export const instance = axios.create({
    //baseURL:  'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
});

export type UserDomainType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error?: string;
    token: string;
    tokenDeathTime: number;
    __v: number;
};