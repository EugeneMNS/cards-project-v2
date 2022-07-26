import React from 'react';
import s from './Login.module.scss'
import style from './InitCommonStyle.module.css'
import {Navigate, NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {login, loginError} from "./auth-reducer";
import {useFormik} from "formik";
import {Alert} from "@mui/material";
import {Simulate} from "react-dom/test-utils";



type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export interface StateType {
    password: string;
    showPassword: boolean;
}

export const Login = () => {

    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector((state) => state.login.isInitialized)
    const error = useAppSelector((state)=>state.login.userData.error)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Must be 6 characters or more';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(login(values))
            formik.resetForm();
        },
    })



    if (isInitialized) {
        return <Navigate to={'/profile'}/>;
    }
    return (
        <div className={style.initComponentWrapper}>
            <h2 className={style.title}>Playing cards</h2>
            <h3 className={style.subtitle}>Sign In</h3>
            <form onSubmit={formik.handleSubmit}>


                <div className={style.formBox}>

                    <label className={style.loginLabel}>Email<br/>
                        <input
                            className={style.Input}
                            type="email"
                            {...formik.getFieldProps('email')}
                        />
                    </label>
                    {
                        formik.touched.email &&
                        formik.errors.email
                            ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null
                    }

                    <label className={style.loginLabel}>Password
                        <input
                            className={style.Input}
                            type="password"
                            {...formik.getFieldProps('password')}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </label>
                    {formik.touched.password &&
                    formik.errors.password
                        ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null
                    }
                    {error && (
                        <span>
            <Alert severity="error">{error}</Alert>
          </span>
                    )}
                    <div className={s.CheckBoxWrapper}>
                        <div>
                            <label className={s.CheckBoxLabel}>
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    onChange={formik.handleChange}
                                    checked={formik.values.rememberMe}
                                />
                                Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <NavLink className={s.linkTransparent} to={'RECOVERY_PATH'}>
                        Forgot password
                    </NavLink>
                </div>
                <div>
                    <button className={style.btnBlue}>Login</button>
                </div>
            </form>
            <p className={style.textLight}>Don't have an account?</p>
            <div>
                <NavLink className={style.linkBlue} to={'REGISTER_PATH'}>
                    Sign Up
                </NavLink>
            </div>
        </div>
    );
};

