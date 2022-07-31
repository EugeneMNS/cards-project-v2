import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI, LoginParamsType} from "../Auth/authAPI";
import {CardPacksType, packsAPI, PacksType, SortingPacksType} from "./packsAPI";
import {checkAuthMe, login, logout, UserDataType} from "../Auth/auth-reducer";


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
    cardPacksTotalCount: 1,
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
    (data: PacksType, {rejectWithValue}) => {
        return packsAPI.getPacks(data).catch((error) => rejectWithValue(error))
    })


const slice = createSlice({
        name: "packs",
        initialState: {
            initialPacksState,
        },
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(getPacks.fulfilled, (state, payload) => {
                    state.initialPacksState = payload.payload.data
                })
        }
    }
)

export const {} = slice.actions
export const packsSlice = slice.reducer