import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo';
import {RootStateType, useAppDispatch, useAppSelector} from "../../redux/store";
import {Navigate} from "react-router-dom";
import {TableContainer} from "../../common/Table/TableContainer";


export const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector((state) => state.auth.isInitialized)
    const profile = useAppSelector((state) => state.auth.userData);


    if (!isInitialized) {
        return <Navigate to={'/login'}/>;
    }

    return (
        <div className={s.container}>

            <div className={s.profile__info}>
                <ProfileInfo/>
            </div>


            <div className={s.profile__main}>
                <h2>My packs list</h2>
                <TableContainer/>
            </div>
        </div>
    );
};