import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginParamsType} from "../Auth/authAPI";
import {profileAPI} from "./profileAPI";
import {useAppDispatch} from "../../redux/store";
import {checkAuthMe, login, logout, UserDataType} from "../Auth/auth-reducer";



export const changeUserName = createAsyncThunk('profile/changeUserName', async (name:string) => {
    //thunkAPI.dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await profileAPI.changeName(name);
        if (res.data.error === '') {
           // thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return res.data.updatedUser;

        } else {
            return res.data
         //   return handleAsyncServerAppError(res.data, thunkAPI)
        }
    } catch (error) {
      //  return handleAsyncServerNetworkError(error, thunkAPI)
    }
})

export const changeUserPhoto = createAsyncThunk('profile/changeUserPhoto', async (avatar: string) => {
    //thunkAPI.dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await profileAPI.changeProfilePhoto(avatar);
        if (res.data.error === '') {
            // thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return res.data.updatedUser;

        } else {
            return res.data
            //   return handleAsyncServerAppError(res.data, thunkAPI)
        }
    } catch (error) {
        //  return handleAsyncServerNetworkError(error, thunkAPI)
    }
})


const userData = {} as UserDataType

const slice = createSlice({
        name: "profile",
        initialState : {
            userData,
        },
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(changeUserName.fulfilled, (state, payload: any) => {
                    console.log(payload)
                    state.userData.name = payload.payload.updatedUser.name
                })
                .addCase(changeUserPhoto.fulfilled,(state,payload:any)=>{
                    state.userData.avatar=payload.payload.updatedUser.avatar
                })
                .addCase(login.fulfilled, (state, payload: any) => {
                    state.userData = payload.payload
                })
                .addCase(logout.fulfilled, (state) => {
                    state.userData = {} as UserDataType
                })
        }

    }
)

//export const {setChangeUserName} = slice.actions
export const profileSlice = slice.reducer

