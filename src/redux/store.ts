import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../features/Auth/auth-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {profileSlice} from "../features/Profile/profileSlice";
import {appSlice} from "./appSlice";

const store = configureStore({
    reducer:{
        login: authReducer,
        profile: profileSlice,
        app: appSlice,

    }
})
export  type RootStateType = ReturnType<typeof store.getState>;


type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export default store
