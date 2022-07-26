import {instance,  UserDomainType} from '../../api/api';


type ChangeNameAvatarPayloadType = {
    name?: string
    avatar?: string // url or base64
}

export const profileAPI = {
    me() {
        return instance.post<UserDomainType>('auth/me', {});
    },
    changeName(name: string) {
        return instance.put<{
            updatedUser: UserDomainType,
            error?:string
        }>
        ('auth/me', {name});
    },
    changeProfilePhoto(avatar: string | ArrayBuffer | null) {
        return instance.put<{
            updatedUser: UserDomainType,
            error?:string
        }>
        ('auth/me', {avatar});
    },
};