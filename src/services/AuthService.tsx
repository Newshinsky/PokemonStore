import api from "../api/config";

export type SignInType = {
    email: string
    password: string
}

export class AuthService {

    static instance = new AuthService()

    static signIn({ email, password }: SignInType) {
        const authData = {
            email, password
        }
        return api.post(`/auth/signIn`, authData)
    }
    static signUp(signData: any) {
        return api.post(`/auth/signup`, signData)
    }

}

export default AuthService.instance

