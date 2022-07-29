import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {registerAPI} from "./registerAPI";


export const registration = createAsyncThunk(
    'registration/fetchReg',
    (payload:{email: string, password:string}, {rejectWithValue})=>{
       return  registerAPI.register(payload).catch((error) => rejectWithValue(error))
    }
)

type InitialStateType = typeof initialState

export const initialState = {
    isRegistration: false,
    message: '',
}

const slice = createSlice({
    name: 'registration',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(registration.pending, (state, action) => {
                state.isRegistration = false
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.isRegistration = true
                state.message = 'Registration is success'
            })
            .addCase(registration.rejected, (state, action:any) => {
                state.message = action.payload.response.data.error
                state.isRegistration = false
            })

    }
})

export const registrationSlice = slice.reducer