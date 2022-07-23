import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {instance} from '../../api/api';
import {RootState} from "../../redux/store";
import {FieldErrorType, LoginParamsType} from "../../api/types";
import {authAPI} from "../../api/authAPI";
import {handleAsyncServerAppError, handleAsyncServerNetworkError} from "../../utils/error-utils";



export const login = createAsyncThunk<undefined, LoginParamsType,
    { rejectValue: { errors: Array<string>, fieldsErrors?: Array<FieldErrorType> } }>('auth/login', async (param, thunkAPI) => {
    //thunkAPI.dispatch(setAppStatus({status: 'loading'}))
    try {
        const res = await authAPI.login(param)
        if (res.data.resultCode === 0) {
            //thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return
        } else {
            return handleAsyncServerAppError(res.data, thunkAPI)
        }
    } catch (error) {
      //  return handleAsyncServerNetworkError(error, thunkAPI)
    }
})

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
    //logout
}

export const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setIsLoggedIn(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state) => {
                state.isLoggedIn = true
            })
            /*.addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = false
            })*/
    }
})

//export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);

export const authReducer = slice.reducer;

//export const { logout } = authSlice.actions;