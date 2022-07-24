import s from './Profile.module.css';
import emptyProfilePhoto from '../../image/default-avatar.jpg'
import React from 'react';


type ProfileInfoPropsType = {
    avatar: string
    name: string
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {



    return (
        <div className={s.profile__infoPage}>

            <div
                style={{
                    paddingTop: '20px',
                    marginBottom: '15px',
                }}
            >
                <div className={s.editAvatar}>
                    <input type="file"
                           //ref={inRef}
                           style={{display: 'none'}}
                           //onChange={upload}
                           accept=".jpg, .jpeg, .png"
                    />

                    <img src={emptyProfilePhoto}
                         className={s.profile__photo}
                        // onClick={() => inRef.current?.click()}
                    />

                    <div className={s.profile__textName}> {props.name}</div>

                </div>


            </div>

            <div className={s.profile__textName}>

            </div>
        </div>
    )
}
