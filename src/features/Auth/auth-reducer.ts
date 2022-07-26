import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI, LoginParamsType} from "./authAPI";
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
    async (data: LoginParamsType, {dispatch}) => {
       // dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await authAPI.login(data);
            dispatch(getToken(res.data.token))
            // @ts-ignore
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
        }
    }
);

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
            loginError(state, action: PayloadAction<string>){
                state.userData.error = action.payload;
            },
            getToken(state, action: PayloadAction<string>) {
                state.userData.token = action.payload;
            }
        },
        extraReducers: builder => {
            builder
                .addCase(login.fulfilled, (state) => {
                    state.isLoggedIn = true
                    state.isInitialized = true
                })
                .addCase(logout.fulfilled, (state) => {
                    state.isLoggedIn = false
                })
        }
    }
)

export const { getToken, loginError, setUserData} = slice.actions
export const authReducer = slice.reducer