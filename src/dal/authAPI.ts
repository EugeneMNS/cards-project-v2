import {instance, UserDomainType} from "./api";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {LoginParamsType, ResponseType} from "./types";


export const authAPI = {
    login(data: LoginParamsType) {
        const promise = instance.post<ResponseType<{userId?: number}>>('auth/login', data);
        return promise;
    },
    logout() {
        const promise = instance.delete<ResponseType<{userId?: number}>>('auth/login');
        return promise;
    },
    me() {
        const promise =  instance.get<ResponseType<{id: number; email: string; login: string}>>('auth/me');
        return promise
    }
}

/*
export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const { data } = await axios.post('/auth/login', params);
    return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const { data } = await axios.post('/auth/register', params);
    return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const { data } = await axios.get('/auth/me');
    return data;
});*/
