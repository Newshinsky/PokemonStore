export type UserDataType = {
    email: string,
    password: string
}

export type LoginPageType = {
    userData: UserDataType,
    isLoading: boolean,
    errors: null | string,
    accessToken: null | string,
    isAuth: boolean
}

export const authSelector = (state: { auth: LoginPageType }) => state.auth 