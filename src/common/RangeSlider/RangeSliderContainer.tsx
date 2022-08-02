import * as React from 'react';
import {useCallback} from 'react';
import {setCardsPacksCountFromRange} from '../../features/PacksList/packsSlice';
import {RangeSlider} from './RangeSlider';
import {useAppDispatch, useAppSelector} from "../../redux/store";


export const RangeSliderContainer = React.memo(() => {
    const dispatch = useAppDispatch()
    const maxCardsCount = useAppSelector<number>(state => state.packs.initialPacksState.maxCardsCount)
    const minCardsCount = useAppSelector<number>(state => state.packs.initialPacksState.minCardsCount)


    const onChangeCommitted = useCallback((values: number[]) => {
        dispatch(setCardsPacksCountFromRange(values))
    }, [dispatch])

    return (<RangeSlider
            onChangeCommitted={onChangeCommitted}
            maxCardsCount={maxCardsCount}
            minCardsCount={minCardsCount}
        />
    );
})