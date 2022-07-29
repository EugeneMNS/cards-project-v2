import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {login, logout} from "../features/Auth/auth-reducer";
import {log} from "util";

type InitialAppStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialState: InitialAppStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
};


const slice = createSlice({
        name: "app",
        initialState,
        reducers: {
            setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
                state.status = action.payload.status
            }
        },
        extraReducers: builder => {
            builder
                .addCase(login.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(login.fulfilled, (state) => {
                    state.status = 'succeeded'
                })
                .addCase(login.rejected, (state) => {
                    state.status = 'failed'
                })
                .addCase(logout.pending, (state) => {
                    state.status = 'loading'
                })
                .addCase(logout.fulfilled, (state) => {
                    state.status = 'succeeded'
                })
                .addCase(logout.rejected, (state) => {
                    state.status = 'failed'
                })

        }
    }
)

export const {setAppStatus} = slice.actions
export const appSlice = slice.reducer