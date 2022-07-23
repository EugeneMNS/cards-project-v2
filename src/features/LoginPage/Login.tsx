import React from 'react';
import s from './Login.module.scss'
import style from './InitCommonStyle.module.css'
import {NavLink} from "react-router-dom";
import {FormikHelpers, useFormik} from "formik";
import {useAppDispatch} from "../../redux/store";
import {authActions} from "./index";
import {login} from "./auth-reducer";

type FormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

export  const Login = () => {
    const dispatch = useAppDispatch()

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }

        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: async (values: FormValuesType, formikHelpers: FormikHelpers<FormValuesType>) => {
            const resultAction = await dispatch(authActions.login(values));

            if  (login.rejected.match(resultAction)) {
                if (resultAction.payload?.fieldsErrors?.length) {
                    const error = resultAction.payload?.fieldsErrors[0];
                    formikHelpers.setFieldError(error.field, error.error);
                }
            }
        },
    })

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
                                {...formik.getFieldProps("email")}
                            />
                        </label>

                        <label className={style.loginLabel}>Password
                            <input
                                className={style.Input}
                                type="password"
                                {...formik.getFieldProps("password")}
                            />
                        </label>
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        <div className={s.CheckBoxWrapper}>
                            <div>
                                <label className={s.CheckBoxLabel}>
                                    <input
                                        type="checkbox"
                                        {...formik.getFieldProps("rememberMe")}
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

export default Login;