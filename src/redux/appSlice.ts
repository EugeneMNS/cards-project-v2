import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialAppStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialState: InitialAppStateType = {
    status: 'loading',
    error: null,
    isInitialized: false
};




 const slice = createSlice({
        name: "app",
        initialState,
        reducers:{
            setAppStatus: (state, action: PayloadAction<{status: RequestStatusType}>) => {
                state.status = action.payload.status
            }
        }
    }

)

export const {setAppStatus} = slice.actions
export const appSlice = slice.reducer