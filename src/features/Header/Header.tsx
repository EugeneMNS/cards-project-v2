import s from './Header.module.css';
import PackListIcon from '../../image/PacksListImg.png'
import ProfileIcon from '../../image/ProfileImg.png'
import LogoutIcon from '../../image/Logout.png'
import {NavLink} from 'react-router-dom';
import {PACKS_LIST_PATH, PROFILE_PATH} from '../../Routes/RoutesConst';
import React, {useEffect, useState} from 'react';

import {LinearProgress} from '@mui/material';

export const Header = () => {
    const [buttonActive, setButtonActive] = useState<'profile' | 'packs-list' | 'logout'>('profile')


    return (
        <div className={s.mainHeader}>
            {/*{status === 'loading' && <div className={s.linearProgress}>
                <LinearProgress color={'info'}/>
            </div>
            }*/}
            <div className={s.wrapper}>


                <div className={s.title}>
                    <h2>PLAYING CARDS</h2>
                </div>


                <div className={s.btnWrap}>
                        <>
                        <NavLink to={PACKS_LIST_PATH}>
                            <button className={
                                buttonActive === 'packs-list'
                                    ? `${s.btn} ${s.active}`
                                    : s.btn
                            }
                                    onClick={() => {
                                      //  dispatch(setWithMyIdAC(false))
                                      //  dispatch(setCardsPacksCountFromRangeAC([0, 1000]))
                                        // dispatch(changeLayoutAC('packs-list'))
                                        // dispatch(setSortPacksValueAC(null))
                                        // setButtonActive('packs-list')
                                    }}>
                                <img className={s.btnImg} src={PackListIcon} alt="PacksListIcon"/>
                                <span>Packs List</span>
                            </button>
                        </NavLink>
                        <NavLink to={PROFILE_PATH}>
                            <button className={
                                buttonActive === 'profile'
                                    ? `${s.btn} ${s.active}`
                                    : s.btn
                            }
                                    onClick={() => {
                                      //  dispatch(setWithMyIdAC(true))
                                      //  dispatch(setCardsPacksCountFromRangeAC([0, 1000]))
                                        // dispatch(changeLayoutAC('profile'))
                                        // dispatch(setSortPacksValueAC(null))
                                        // setButtonActive('profile')
                                    }}>
                                <img className={s.btnImg} src={ProfileIcon} alt="ProfileIcon"/>
                                <span>Profile</span>
                            </button>
                        </NavLink>
                        <button className={
                            buttonActive === 'logout'
                                ? `${s.btn} ${s.active}`
                                : s.btn
                        }
                                onClick={() => {
                                 //   dispatch(logOut())
                                }}
                        >
                            <img className={`${s.btnImg} ${s.btnLogout}`} src={LogoutIcon} alt="Logout"/>
                            <span>Logout</span>
                        </button>
                    </>
                </div>


            </div>
        </div>
    );
}


export default Header;