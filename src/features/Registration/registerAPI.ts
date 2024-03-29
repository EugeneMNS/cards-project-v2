import {instance, UserDomainType} from '../../api/api'

type RegisterDataType = {
    email: string;
    password: string;
};
type RegisterType = {
    addedUser: UserDomainType;
    error?: string;
};

export const registerAPI = {
    register(payload: RegisterDataType) {
        return instance.post<RegisterType>('auth/register', {
            email: payload.email,
            password: payload.password,
        });
    },
};