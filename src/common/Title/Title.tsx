import React from 'react';
import s from '../Table/Table.module.scss';
import {useAppSelector} from "../../redux/store";




export const Title = () => {
    const userName = useAppSelector((state) => state.profile.userData.name);
    return (
        <div className={s.Table__name}>
            <h3>Packs list</h3>
        </div>
    )
}