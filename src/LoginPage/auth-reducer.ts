import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {instance} from '../dal/api';
import {RootState} from "../redux/store";



export const login = createAsyncThunk('auth/fetchAuth', async (params) => {
    const { data } = await instance.post('/auth/login', params);
    return data;
});


export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const { data } = await instance.get('/auth/me');
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
    isLoggedIn: false,
};

export const asyncActions = {
    login,
   // logout
}

export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers: builder =>  {
        builder
            .addCase(login.pending, (state)=>{
                state.status = 'loading'
                state.data = null
                console.log('login pending')
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.isLoggedIn = true
                state.status = 'loaded'
                state.data = action.payload
                console.log('login fulfilled')
            })
            .addCase(login.rejected, (state)=>{
                state.isLoggedIn = false
                state.status = 'error'
                state.data = null
                console.log('login error')
            })
    },
});

//export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);

export const authReducer = slice.reducer;

//export const { logout } = authSlice.actions;