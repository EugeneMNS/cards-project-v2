import React, {useCallback, useState} from 'react';
import s from './Table.module.scss';
import SearchPacksContainer from "../Search/SearchPacksContainer";



export const TableContainer = () => {


    return (
        <div className={s.table_container}>
            <div className={s.Table__top}>
                <SearchPacksContainer/>
                <button className={s.add}
                        onClick={() => {}}> Add new pack</button>
            </div>

        </div>

    )

}