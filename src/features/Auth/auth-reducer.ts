import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginParamsType} from "./authAPI";
import {changeUserName} from "../Profile/profileSlice";
//import {setAppStatus} from "./AppReducer";

/*const initializeApp = createAsyncThunk('auth/initializeApp', async (param, {dispatch}) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        dispatch(setIsLoggedIn({value: true}))
    } else {

    }
})*/

export const checkAuthMe= createAsyncThunk(
    'auth/checkAuthMe',
    (data: LoginParamsType, {rejectWithValue}) => {
        return authAPI.me().catch((error) => rejectWithValue(error))
    })

export const login = createAsyncThunk(
    'auth/fetchLogin',
    (data: LoginParamsType, {rejectWithValue}) => {
        // dispatch(setAppStatus({status: 'loading'}))
        /* try {
             const res = await authAPI.auth(data);
             dispatch(setUserData(res.data))
             // dispatch(setAppStatus({status: 'succeeded'}))
         } catch (e: any) {
             const error = e.response
                 ? e.response.data.error
                 : (e.message + ', more details in the console');
             console.log('Error: ', {...e})
             dispatch(loginError(error))
             // dispatch(setAppStatus({status: 'failed'}))
         } finally {
             //dispatch(setAppStatus({status: 'idle'}))
         }*/


        return authAPI.auth(data).catch((error) => rejectWithValue(error))
    })


export const logout = createAsyncThunk(
    'auth/fetchLogout',
    async (_, {dispatch}) => {
        //dispatch(setAppStatus({status: 'loading'}))
        try {
            await authAPI.logout();
            // dispatch(setIsInitialized({value:true}))
            // dispatch(setIsLoggedIn({value:true}))
            // dispatch(setAppStatus({status: 'succeeded'}))
        } catch (err: any) {
            console.log(err)
            //  dispatch(setAppStatus({status: 'failed'}))
        } finally {
            // dispatch(setAppStatus({status: 'idle'}))
        }
    }
);

export type UserDataType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

const userData = {} as UserDataType ;

const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        isInitialized: false,
        status: 'idle',
        userData
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, payload) => {
                state.isLoggedIn = true
                state.isInitialized = true
                state.userData = payload.payload

            })
            .addCase(login.rejected, (state, payload: any) => {
                console.log(payload.payload.response.data.error)
                state.userData.error = payload.payload.response.data.error
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false
                state.isInitialized = false
                state.userData = {} as UserDataType
            })
    }
}

)

export const {} = slice.actions
export const authReducer = slice.reducer