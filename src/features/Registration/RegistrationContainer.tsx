import React, {useCallback} from 'react';
import Register from './Register';
import {Navigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector} from "../../redux/store";
import {registration} from "./registrationSlice";

const RegistrationContainer: React.FC = () => {
    const dispatch = useAppDispatch()
    const isRegistration = useAppSelector<boolean>(state => state.registration.isRegistration)

    const registrationRequest = (email: string, password: string) => {
       dispatch(registration({email, password}))
    }

    if (isRegistration) {
        return <Navigate to={'/login'}/>
    }
    return <Register
        registrationRequest={registrationRequest}
    />;
};

export default RegistrationContainer;