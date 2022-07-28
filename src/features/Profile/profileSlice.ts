import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginParamsType} from "../Auth/authAPI";
import {profileAPI} from "./profileAPI";
import {useAppDispatch} from "../../redux/store";
import {checkAuthMe, login, UserDataType} from "../Auth/auth-reducer";



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
                .addCase(login.fulfilled, (state, payload: any) => {
                    state.userData = payload.payload
                })
        }

    }
)

//export const {setChangeUserName} = slice.actions
export const profileSlice = slice.reducer

