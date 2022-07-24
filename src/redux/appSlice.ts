import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginParamsType} from "../features/Auth/authAPI";
import {setIsLoggedIn} from "../features/Auth/auth-reducer";
//import {setAppStatus} from "./AppReducer";

const initializeApp = createAsyncThunk('app/initializeApp', async (param, {dispatch}) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        dispatch(setIsLoggedIn({value: true}))
    } else {

    }
})


type InitialAppStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialState : InitialAppStateType ={
    status: 'loading',
    error: null,
    isInitialized: false,

}


const slice = createSlice({
        name: "app",
        initialState,
        reducers: {},
    extraReducers: builder => {
            builder
                .addCase(initializeApp.fulfilled, (state)=>{
                        state.isInitialized = true
                })
    }
    }
)


export const appSlice = slice.reducer