import React, {useCallback, useState} from 'react';
import s from './Table.module.scss';
import SearchPacksContainer from "../Search/SearchPacksContainer";



export const TableContainer = () => {


    return (
        <div className={s.table_container}>
            <div className={s.Table__top}>
                <SearchPacksContainer/>
            </div>

        </div>

    )

}