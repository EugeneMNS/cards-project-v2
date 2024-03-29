import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {setAppError} from "../../redux/appSlice";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
));

export const ErrorSnackbar = () => {

    const error = useAppSelector<string | null>((state) => state.app.error);


    const dispatch = useAppDispatch();

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppError({error: null}));
    };

    return (
        <Snackbar
            open={error !== null}
            autoHideDuration={5000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity='error' sx={{width: '100%'}}>
                {error}
            </Alert>
        </Snackbar>
    );
}