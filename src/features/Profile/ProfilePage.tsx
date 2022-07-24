import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo';
import {useAppDispatch, useAppSelector} from "../../redux/store";


export const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector((state) => state.app.isInitialized)


    return (
        <div className={s.container}>

            <div className={s.profile__info}>
                <ProfileInfo
                    name={'profile.name'}
                    avatar={'profile.avatar'}
                />
            </div>


            <div className={s.profile__main}>
                <h2>My packs list</h2>
            </div>
        </div>
    );
};