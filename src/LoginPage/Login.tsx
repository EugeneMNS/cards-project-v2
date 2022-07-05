import React from 'react';
import s from './Login.module.scss'
import style from './InitCommonStyle.module.css'
import {NavLink} from "react-router-dom";


const Login = () => {
    function handleSubmit() {

    }

    return (
            <div className={style.initComponentWrapper}>
                <h2 className={style.title}>Playing cards</h2>
                <h3 className={style.subtitle}>Sign In</h3>
                <form onSubmit={handleSubmit}>


                    <div className={style.formBox}>

                        <label className={style.loginLabel}>Email<br/>
                            <input
                                className={style.Input}
                                value={'email'} //
                                type="email"
                                name="email"
                               /* onChange={(e) => setEmail(e.currentTarget.value)}*/
                            />
                        </label>

                        <label className={style.loginLabel}>Password
                            <input
                                className={style.Input}
                                value={'password'}//
                                type="password"
                                name="password"
                                /*onChange={(e) => setPassword(e.currentTarget.value)}*/
                            />
                        </label>

                        <div className={s.CheckBoxWrapper}>
                            <div>
                                <label className={s.CheckBoxLabel}>
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                       /* onChange={(e) => setRememberMe(e.currentTarget.checked)}*/
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