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
    cardsValuesFromRange: Array<number>
    withMyId: boolean
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
    cardsValuesFromRange: [0, 1000],
    withMyId: true,
    sortingBy: "" ,
};


export const getPacks = createAsyncThunk(
    'packs/get',
    async (payload:PacksType, {getState,rejectWithValue}) => {
        const state = getState() as RootStateType;
        const {pageCount, page } = state.packs.initialPacksState
        //const user_id = state.profile.userData?._id || false
        const packName = state.packs.initialPacksState.packName // for search?
        const finalPayload = {
            pageCount,
            page,
            ...payload,
        }
        return  await packsAPI.getPacks({...finalPayload}).catch((error) => rejectWithValue(error))
    })


const slice = createSlice({
        name: "packs",
        initialState: {
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
                state.initialPacksState.withMyId = action.payload
            },
            setCardsPacksCountFromRange: (state,action)=>{
                state.initialPacksState.cardsValuesFromRange = action.payload
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