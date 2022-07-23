import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../LoginPage/auth-reducer";
import {useDispatch} from "react-redux";

const store = configureStore({
    reducer:{
        login: authReducer,

    }
})
export  type RootStateType = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store