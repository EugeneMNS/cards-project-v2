import s from './Profile.module.css';
import emptyProfilePhoto from '../../image/default-avatar.jpg'
import pencil from '../../image/pencil.png'
import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {changeUserName, changeUserPhoto} from "./profileSlice";
import {TextField} from "@mui/material";


export const ProfileInfo = () => {
    const profile = useAppSelector((state) => state.profile.userData);
    const [title, setTitle] = useState(profile.name)

    const [editProfileMode, setEditProfileMode] = useState(false);

    const dispatch = useAppDispatch()
    const inRef = useRef<HTMLInputElement>(null)

    const upload = (e: ChangeEvent<HTMLInputElement>) => {

        const reader = new FileReader()

        //у таргета files всегда массив, даже если инпуту не поставлен multiply там всего 1 файл
        const newFile = e.target.files && e.target.files[0]

        if (newFile) {
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    dispatch(changeUserPhoto(reader.result))
                }
            }
            reader.readAsDataURL(newFile)

        }
    }
    const onBlur = () => {
        setEditProfileMode(false)
        if (title !== profile.name) {
            dispatch(changeUserName(title))
        }
    }
    const onEnterPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEditProfileMode(false)
            if (title !== profile.name) {
                dispatch(changeUserName(title))
            }
        }
    }

    useEffect(() => {
        setTitle(profile.name)
    }, [profile.name])

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
                           ref={inRef}
                           style={{display: 'none'}}
                           onChange={upload}
                           accept=".jpg, .jpeg, .png"
                    />

                    <img src={profile.avatar ? profile.avatar : emptyProfilePhoto}
                         className={s.profile__photo}
                         onClick={() => inRef.current?.click()}
                    />
                </div>


            </div>

            <div className={s.profile__textName}
                 onClick={() => {
                     setEditProfileMode(true)
                 }
                 }
            >

                {editProfileMode
                    ? <TextField variant={'standard'}
                                 value={title}
                                 onBlur={onBlur}
                                 autoFocus
                                 onKeyPress={onEnterPressHandler}
                                 onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                    : <span onClick={() => {
                        setEditProfileMode(false)
                    }
                    }>{profile.name}
                        <img src={pencil} height={'13px'}
                             style={{display: 'inline-block', marginLeft: '10px'}}/>
                </span>

                }
            </div>
        </div>
    )
}

