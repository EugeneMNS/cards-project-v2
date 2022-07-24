import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export type ProfileDataStateType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    avatar?: string
    __v: number
    _id: string
}



const initialState : ProfileDataStateType ={
    created: '',
    email: '',
    isAdmin: false,
    name: '',
    publicCardPacksCount: 0,
    rememberMe: false,
    token: '',
    tokenDeathTime: 0,
    updated: '',
    verified: false,
    __v: 0,
    _id: ''
}



const slice = createSlice({
        name: "profile",
        initialState,
        reducers: {
            setProfileData(state: ProfileDataStateType, action) {
                state = action.payload
            },
        },
    }
)

export const {setProfileData} = slice.actions
export const profileSlice = slice.reducer