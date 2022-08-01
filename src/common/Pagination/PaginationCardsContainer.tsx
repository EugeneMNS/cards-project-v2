// import React, {useCallback} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {Pagination} from './Paginationn';
// import {setCardsCurrentPageAC, setCardsPageCountAC} from '../../../bll/cardsReducer';
//
// export const PaginationCardsContainer = () => {
//     const dispatch = useDispatch()
//     let pageCount = useSelector<number>(state => state.cards.pageCount)
//     let cardPacksTotalCount = useSelector<number>(state => state.cards.cardsTotalCount)
//     let page = useSelector<number>(state => state.cards.page)
//
//
//     const currentPageHandler = useCallback((page: number) => {
//         dispatch(setCardsCurrentPageAC(page))
//     }, [])
//
//     const onChangeOption = useCallback((value: number) => {
//         dispatch(setCardsPageCountAC(value))
//     }, [])
//
//
//     return <Pagination
//         cardPacksTotalCount={cardPacksTotalCount}
//         pageCount={pageCount}
//         onChangeOption={onChangeOption}
//         page={page}
//         currentPageHandler={currentPageHandler}
//     />
// }