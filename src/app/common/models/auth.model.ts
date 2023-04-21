export class AuthUserModel{
    user_auth_token:string
    user_email:string
    logedin:boolean
}

export interface LoginModel{
    user_email:string,
    user_password:string
}

export interface RegisterModel{
    user_email:string,
    user_password:string,
    user_type:string,
}
