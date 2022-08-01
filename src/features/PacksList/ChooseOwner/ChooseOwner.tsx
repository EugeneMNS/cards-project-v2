import {setCardsPacksCountFromRange, setSortPacksValue, setWithMyId} from '../packsSlice';
import s from './ChooseOwner.module.scss';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import React from 'react';

export const ChooseOwner = () => {
    const dispatch = useAppDispatch()
    const withMyId = useAppSelector<boolean>(state => state.packs.initialPacksState.withMyId)

    return <div className={s.ChooseOwner}>
        <div className={s.Choose__text}><b>Show packs cards</b></div>
        <button className={
            withMyId
                ? `${s.active} ${s.Choose__button}`
                :  s.Choose__button
        }
                onClick={() => {
                    dispatch(setWithMyId(true))
                    dispatch(setCardsPacksCountFromRange([0,1000]))
                    dispatch(setSortPacksValue(""))
                }
                }>My
        </button>
        <button className={
            !withMyId
                ? `${s.active} ${s.Choose__button}`
                :  s.Choose__button
        }
                onClick={() => {
                    dispatch(setWithMyId(false))
                    dispatch(setCardsPacksCountFromRange([0,1000]))
                    dispatch(setSortPacksValue(""))
                }}>All
        </button>
    </div>
}