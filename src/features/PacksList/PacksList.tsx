import React, {useEffect} from 'react';
import s from '../Profile/Profile.module.css'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Title} from "../../common/Title/Title";
import {TableContainer} from "../../common/Table/TableContainer";
import {getPacks} from "./packsSlice";

export const PacksList = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>((state) => state.app.isInitialized);

    useEffect(() => {
        if (isInitialized) {
            // @ts-ignore
            dispatch(getPacks())}
    },[])

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
