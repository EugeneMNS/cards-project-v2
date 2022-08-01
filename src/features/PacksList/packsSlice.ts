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
        let params = new URL (document.location.href.replace('#', '/')).searchParams
        let url_user_id = params.get('userId')
        const { withMyId, pageCount, page, sortingBy } = state.packs.initialPacksState
        //const user_id = state.profile.userData?._id || false
        const packName = state.packs.initialPacksState.packName // for search?
        const finalPayload = {
            pageCount,
            page,
            sortingBy,
            ...payload,
        }
       // withMyId && user_id && (finalPayload.user_id = user_id)
        packName && (finalPayload.packName = packName)
        url_user_id && (finalPayload.user_id = url_user_id)
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
            }
        },
        extraReducers: builder => {
            builder
                .addCase(getPacks.fulfilled, (state, payload) => {
                    state.initialPacksState = payload.payload.data
                })
        }
    }
)

export const {updatePage, updatePageCount} = slice.actions
export const packsSlice = slice.reducer