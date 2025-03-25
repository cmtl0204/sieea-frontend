import { RoleInterface, UserInterface } from '@modules/auth/interfaces';

export interface SignInResponseInterface {
    data: Data;
    message: string;
    title: string;
    accessToken: string;
}

interface Data {
    auth: UserInterface;
    accessToken: string;
    roles: RoleInterface[];
}
