import React from 'react';
import {Pagination} from './Paginationn';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {updatePage, updatePageCount} from '../../features/PacksList/packsSlice';

export const PaginationPacksContainer = () => {
    const dispatch = useAppDispatch()
    const pageCount = useAppSelector< number>(state => state.packs.initialPacksState.pageCount)
    const cardPacksTotalCount = useAppSelector< number>(state => state.packs.initialPacksState.cardPacksTotalCount)
    const page = useAppSelector< number>(state => state.packs.initialPacksState.page)

    const currentPageHandler = (page: number) => {
        dispatch(updatePage(page))
    }

    const onChangeOption = (value: number) => {
        dispatch(updatePageCount(value))
    }

    return <Pagination
        cardPacksTotalCount={cardPacksTotalCount}
        pageCount={pageCount}
        onChangeOption={onChangeOption}
        page={page}
        currentPageHandler={currentPageHandler}
    />
}