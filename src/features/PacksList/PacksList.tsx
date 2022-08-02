import React, {useEffect} from 'react';
import s from '../Profile/Profile.module.css'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Title} from "../../common/Title/Title";
import {TableContainer} from "../../common/Table/TableContainer";
import {getPacks} from "./packsSlice";
import {PaginationPacksContainer} from "../../common/Pagination/PaginationPacksContainer";
import {SortingPacksType} from "./packsAPI";
import {ChooseOwner} from "./ChooseOwner/ChooseOwner";
import {RangeSliderContainer} from "../../common/RangeSlider/RangeSliderContainer";

export const PacksList = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>((state) => state.app.isInitialized);
    const withMyId = useAppSelector<boolean>(state => state.packs.withMyId)
    const page = useAppSelector<number>(state => state.packs.initialPacksState.page)
    const sortingBy = useAppSelector<SortingPacksType | ''>(state => state.packs.initialPacksState.sortingBy)
    const packName = useAppSelector<string>(state => state.packs.initialPacksState.packName)
    const pageCount = useAppSelector<number>(state => state.packs.initialPacksState.pageCount)
    const cardsValuesFromRange = useAppSelector<Array<number>>((state) =>
        state.packs.cardsValuesFromRange);

    useEffect(() => {
        if (isInitialized) {

            dispatch(getPacks({}))}
    },[
        withMyId,
        page,
        pageCount,
        cardsValuesFromRange,
        packName,
        sortingBy,
        dispatch,
        isInitialized
    ])

    if (!isInitialized) {
        return <Navigate to={'/login'}/>;
    }
    return (
        <div className={s.container}>
            <div className={s.profile__info}>
                <div className={s.profile__ChooseOwner}>
                    <ChooseOwner/>
                </div>
                <RangeSliderContainer/>
               {/* <Sorting/>*/}
            </div>

            <div className={s.profile__main}>
                <Title/>
                <TableContainer/>
                <PaginationPacksContainer/>
            </div>
            {/*<ErrorSnackbar/>*/}
        </div>

    )

}
