import React from 'react';
import s from '../Profile/Profile.module.css'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../redux/store";
import {Title} from "../../common/Title/Title";
import {TableContainer} from "../../common/Table/TableContainer";

export const PacksList = () => {
    const isInitialized = useAppSelector< boolean>((state) => state.app.isInitialized);
    if (!isInitialized) {
        return <Navigate to={'/login'}/>;
    }
    return (
        <div className={s.container}>
            <div className={s.profile__info}>
                <div className={s.profile__ChooseOwner}>
                   {/* <ChooseOwner/>*/}
                </div>
               {/* <RangeSliderContainer/>
                <Sorting/>*/}
            </div>

            <div className={s.profile__main}>
                <Title/>
                <TableContainer/>
                {/*  <PaginationPacksContainer/>*/}
            </div>
            {/*<ErrorSnackbar/>*/}
        </div>

    )

}
