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
            dispatch(setIsInitialized({value: true}))
            dispatch(setIsLoggedIn({value:true}))
            dispatch(getToken(res.data.token))
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
            dispatch(setIsInitialized({value:true}))
            dispatch(setIsLoggedIn({value:true}))
           // dispatch(setAppStatus({status: 'succeeded'}))
        } catch (err: any) {
            console.log(err)
          //  dispatch(setAppStatus({status: 'failed'}))
        } finally {
           // dispatch(setAppStatus({status: 'idle'}))
        }
    }
);

const slice = createSlice({
        name: "auth",
        initialState: {
            isLoggedIn: false,
            isInitialized: false,
            token: '',
            status: 'idle',
            error: '',
        },
        reducers: {
            setIsInitialized: (state, action: PayloadAction<{value: boolean}>) => {
                state.isInitialized = action.payload.value
            },
            setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
                state.isLoggedIn = action.payload.value
            },
            loginError(state, action: PayloadAction<string>){
                state.error = action.payload;
            },
            getToken(state, action: PayloadAction<string>) {
                state.token = action.payload;
            }
        },
        extraReducers: builder => {
            builder
                .addCase(login.fulfilled, (state) => {
                    state.isLoggedIn = true
                })
                .addCase(logout.fulfilled, (state) => {
                    state.isLoggedIn = false
                })
                /*.addCase(initializeApp.fulfilled, (state)=>{
                    state.isInitialized = true
                })*/
        }
    }
)

export const {setIsInitialized,setIsLoggedIn, getToken, loginError} = slice.actions
export const authReducer = slice.reducer