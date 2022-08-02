import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import s from './Search.module.scss';
import {useAppDispatch} from "../../redux/store";
import {setSearchPacksValue} from "../../features/PacksList/packsSlice";
import useDebounce from "./useDebounce";


type SearchPropsType = {
    value: string
    onKeyUpHandler: (value: string) => void
}
const Search = (props: SearchPropsType) => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(props.value)

    const onKeyUpHandler = useDebounce(() => props.onKeyUpHandler(value), 1000)
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.onKeyUpHandler(value)
        }
    }

    const setInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    useEffect(() => {
        return () => {
            dispatch(setSearchPacksValue(""))
        }
    }, [])
    return (
        <input className={s.searchInput}
               type="text"
               value={value}
               placeholder={'Search...'}
               onChange={setInputValueHandler}
               onKeyUp={onKeyUpHandler}
               onKeyPress={onEnterPressHandler}
        />

    )
};

export default Search;