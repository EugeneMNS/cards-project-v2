import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../features/LoginPage/auth-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer:{
        login: authReducer,

    }
})
export  type RootStateType = ReturnType<typeof store.getState>;


type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export default store
