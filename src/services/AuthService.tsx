import api from "../api/config";

export type SignInType = {
    email: string
    password: string
}

export type signDataType = {
    email: string,
    firstName: string,
    lastName: string,
    address: {
        country: string,
        city: string,
        addressLine1: string,
        addressLine2: string,
    },
    gender: string,
    password: string,
    phone: string
}
export class AuthService {

    static instance = new AuthService()

    static signIn({ email, password }: SignInType) {
        const authData = {
            email, password
        }
        return api.post(`/auth/signIn`, authData)
    }
    static signUp(signData: signDataType) {
        return api.post(`/auth/signup`, signData)
    }

    signOut() {
        localStorage.clear()
        window.location.reload()
    }

}

export default AuthService.instance

