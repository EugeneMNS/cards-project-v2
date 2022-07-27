import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../Auth/authAPI";
import {profileAPI} from "./profileAPI";
import {useAppDispatch} from "../../redux/store";



const userData ={
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
}


export const changeUserName = createAsyncThunk('profile/changeUserName', async (name:string) => {
    //thunkAPI.dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await profileAPI.changeName(name);
        if (res.data.error === '') {
           // thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return res.data.updatedUser;

        } else {
         //   return handleAsyncServerAppError(res.data, thunkAPI)
        }
    } catch (error) {
      //  return handleAsyncServerNetworkError(error, thunkAPI)
    }
})




const slice = createSlice({
        name: "profile",
        initialState : {
            userData,
        },
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(changeUserName.fulfilled, (state, action) => {

                })
        }

    }
)

//export const {setChangeUserName} = slice.actions
export const profileSlice = slice.reducer

