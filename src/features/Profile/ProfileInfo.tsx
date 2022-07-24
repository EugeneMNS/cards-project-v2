import s from './Profile.module.css';
import emptyProfilePhoto from '../image/elon-musk-smoke.gif'
import React from 'react';


type ProfileInfoPropsType = {
    avatar: string
    name: string
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {



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

                    <img src={props.avatar ? props.avatar : emptyProfilePhoto}
                         className={s.profile__photo}
                        // onClick={() => inRef.current?.click()}
                    />
                </div>


            </div>

            <div className={s.profile__textName}>

            </div>
        </div>
    )
})
