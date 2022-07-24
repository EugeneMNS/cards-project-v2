import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginParamsType} from "../features/Auth/authAPI";
import {setIsLoggedIn} from "../features/Auth/auth-reducer";
//import {setAppStatus} from "./AppReducer";

const initializeApp = createAsyncThunk('app/initializeApp', async (param, {dispatch}) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        dispatch(setIsInitialized({value: true}))
        dispatch(setIsLoggedIn({value: true}))
    } else {

    }
})


type InitialAppStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
    isLoggedIn: boolean
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialState : InitialAppStateType ={
    status: 'loading',
    error: null,
    isInitialized: false,
    isLoggedIn: false,
}


const slice = createSlice({
        name: "app",
        initialState,
        reducers: {
            setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
                state.isLoggedIn = action.payload.value
            },
            setIsInitialized(state, action: PayloadAction<{ value: boolean }>) {
                state.isInitialized = action.payload.value
            },
        },
    }
)

export const {setIsInitialized} = slice.actions
export const appSlice = slice.reducer