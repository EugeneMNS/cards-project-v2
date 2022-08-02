import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CardPacksType, packsAPI, PacksType, SortingPacksType} from "./packsAPI";
import {RootStateType} from "../../redux/store";


export type InitialStateType = {

    cardPacks: CardPacksType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    packName: string
    // sortingBy: null | SortingPacksType
    sortingBy: "" | SortingPacksType
}

const initialPacksState: InitialStateType = {
    cardPacks: [] as CardPacksType[],
    cardPacksTotalCount: 0,
    maxCardsCount: Infinity as number,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    packName: '', //for search
    sortingBy: "" ,
};


export const getPacks = createAsyncThunk(
    'packs/get',
    async (payload:PacksType, {getState,rejectWithValue}) => {
        const state = getState() as RootStateType;
        const { page,pageCount, packName, sortingBy } = state.packs.initialPacksState
        const {withMyId}= state.packs
        const {cardsValuesFromRange}= state.packs
        const user_id = state.profile.userData?._id
        //const packName = state.packs.initialPacksState.packName // for search?
        let mainPayload = withMyId
            ? {
                user_id: user_id,
                page: page,
                pageCount: pageCount,
                min: cardsValuesFromRange[0],
                max: cardsValuesFromRange[1],
                packName: packName,
            }
            : {
                page: page,
                pageCount:  pageCount,
                min: cardsValuesFromRange[0],
                max: cardsValuesFromRange[1],
                packName: packName,
            }
        if (sortingBy) { // @ts-ignore
            mainPayload = {...mainPayload, sortPacks: sortingBy}}
        //withMyId && user_id && (finalPayload.user_id = user_id)
        //packName && (finalPayload.packName = packName)
        // url_user_id && (finalPayload.user_id = url_user_id)
        return  await packsAPI.getPacks({...mainPayload, ...payload}).catch((error) => rejectWithValue(error))
    })

const slice = createSlice({
        name: "packs",
        initialState: {
            withMyId: false,
            cardsValuesFromRange: [0, 1000],
            initialPacksState,
        },
        reducers: {
            updatePage: (state, action) => {
                state.initialPacksState.page = action.payload;
            },
            updatePageCount: (state, action) => {
                state.initialPacksState.pageCount = action.payload;
            },
            setWithMyId: (state,action)=>{
                state.withMyId = action.payload
            },
            setCardsPacksCountFromRange: (state,action)=>{
                state.cardsValuesFromRange = action.payload
            },
            setSortPacksValue: (state,action)=>{
                state.initialPacksState.sortingBy = action.payload
            },

        },
        extraReducers: builder => {
            builder
                .addCase(getPacks.fulfilled, (state, payload) => {
                    state.initialPacksState = payload.payload.data
                })
        }
    }
)

export const {updatePage, updatePageCount, setWithMyId, setCardsPacksCountFromRange, setSortPacksValue } = slice.actions
export const packsSlice = slice.reducer