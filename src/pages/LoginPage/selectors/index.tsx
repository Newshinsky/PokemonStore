export type UserDataType = {
    email: string,
    password: string
    address: {
        city: string,
        country: string,
        addressLine1: string,
        addressLine2: string,
    },
    phone: string,
    firstName: string,
    lastName: string,
    gender: string

}

export type LoginPageType = {
    userData: UserDataType,
    isLoading: boolean,
    errors: null | string,
    accessToken: null | string,
    isAuth: boolean
}

export const authSelector = (state: { auth: LoginPageType }) => state.auth 