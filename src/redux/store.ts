import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../features/Auth/auth-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {profileSlice} from "../features/Profile/profileSlice";
import {appSlice} from "./appSlice";
import {registrationSlice} from "../features/Registration/registrationSlice";
import {packsSlice} from "../features/PacksList/packsSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileSlice,
        app: appSlice,
        registration: registrationSlice,
        packs: packsSlice,
    }
})
export  type RootStateType = ReturnType<typeof store.getState>;


type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export default store
