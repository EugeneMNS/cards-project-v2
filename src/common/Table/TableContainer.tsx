import React, {useCallback, useState} from 'react';
import s from './Table.module.scss';
import SearchPacksContainer from "../Search/SearchPacksContainer";
import {Table} from "./Table";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {CardPacksType} from "../../features/PacksList/packsAPI";



export const TableContainer = () => {
    const packsList = useAppSelector<CardPacksType[]>((state)=>state.packs.initialPacksState.cardPacks)
    const userId = useAppSelector<string>((state)=>state.profile.userData._id)

    const editModeOn = ()=>{}
    const deleteModeOn = ()=>{}

    return (
        <div className={s.table_container}>
            <div className={s.Table__top}>
                <SearchPacksContainer/>
                <button className={s.add}
                        onClick={() => {}}> Add new pack</button>
            </div>

            <Table packsList={packsList}
                   userId={userId}
                   deleteModeOn={deleteModeOn}
                   editModeOn={editModeOn}
            />

        </div>

    )

}