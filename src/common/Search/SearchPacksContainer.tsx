import s from './Search.module.scss';
import Search from './Search';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setSearchPacksValue} from "../../features/PacksList/packsSlice";


const SearchPacksContainer = () => {
    const dispatch = useAppDispatch();
    const packName = useAppSelector(state => state.packs.packName);
    const onKeyUpHandler = (value: string) => dispatch(setSearchPacksValue(value));


    return <div className={s.search}>
        <Search
            value={packName}
            onKeyUpHandler={onKeyUpHandler}
        />
    </div>
}

export default SearchPacksContainer;