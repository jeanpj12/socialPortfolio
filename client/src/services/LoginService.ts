import axios from "axios";
import { API } from "./APIService";
import Cookies from "universal-cookie";

type LoginProps = {
    email: string,
    password: string,
}

export const LoginService = async ({ email, password }: LoginProps) => {

    const cookies = new Cookies();
    try {
        const loginResponse = await API.post(
            '/session',
            {
                email: email,
                password: password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (loginResponse.status === 200) {

            cookies.set('jwt', loginResponse.data.token, {
                path: '/',
                secure: true,
                sameSite: 'strict',
                maxAge: 86400
            })
            cookies.set('user_id', loginResponse.data.user.id, {
                path: '/',
                secure: true,
                sameSite: 'strict',
                maxAge: 86400
            })
            return {
                ...loginResponse.data.user,
                avatar: loginResponse.data.user.avatar.split('/').pop()
            }
        }
    } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data;
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}