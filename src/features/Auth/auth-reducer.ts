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

type UserData = {
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

const userData = {} as UserData

const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        isInitialized: false,
        status: 'idle',
        userData
    },
    reducers: {
        setUserData(state, action: PayloadAction<typeof userData>) {
            state.userData = action.payload
        },
        loginError(state, action: PayloadAction<string>) {
            state.userData.error = action.payload;
        },
    },
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
            })

            .addCase(changeUserName.fulfilled, (state, payload: any) => {
                console.log(payload)
                state.userData.name = payload.payload.updatedUser.name
            })
    }
}

)

export const {loginError, setUserData} = slice.actions
export const authReducer = slice.reducer