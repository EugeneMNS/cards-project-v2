import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "../features/LoginPage/auth-reducer";
import {useDispatch} from "react-redux";
import {appReducer} from "../features/Application";

export const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,

})

export const store = configureStore({
    reducer: rootReducer


})
export  type RootStateType = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store
