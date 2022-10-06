declare interface RegisterTypes {
    name: string;
    email: string;
    password: string;
    avatar: string;
    status?: string;
}
declare interface ResTypes {
    accessToken: undefined | string;
    user: undefined | RegisterTypes;
}
