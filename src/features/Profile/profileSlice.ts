import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export type InitialProfileStateType = typeof initialProfileState;
const initialProfileState = {
    _id: "",
    email: "",
    name: "",
    avatar: "",
    publicCardPacksCount: 0,
    created: "",
    updated: "",
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: "",
    token: "",
    tokenDeathTime: 0,
    __v: 0,
};




const slice = createSlice({
        name: "profile",
        initialState : initialProfileState,
        reducers: {
            setProfileData(state, action) {
                state = action.payload
            },
        },
    }
)

export const {setProfileData} = slice.actions
export const profileSlice = slice.reducer