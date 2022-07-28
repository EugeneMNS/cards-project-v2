import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import { ProfilePage } from "../features/Profile/ProfilePage";
import {Login}  from "../features/Auth/Login";

export const SIGN_IN_PATH = '/login';
export const REGISTER_PATH = '/register';
export const FORGOT_PATH = '/forgot';
export const PROFILE_PATH = '/profile';
export const PACKS_LIST_PATH = '/packs-list';
export const RECOVERY_PATH = '/set-new-password/:token';
export const CREATE_NEW_PASSWORD_PATH = '/createNewPassword"'

export const RoutesConst = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<ProfilePage/>} />
    <Route path={SIGN_IN_PATH} element={<Login />} />
    <Route path={PROFILE_PATH} element={<ProfilePage />} />
    <Route path="*" element={<Navigate to='/404'/>} />
    </Routes>
    </div>
);
};