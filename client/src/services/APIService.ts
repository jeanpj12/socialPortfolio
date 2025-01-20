import axios from "axios";
import Cookies from "universal-cookie"

const BASE_URL = process.env.BACKEND_URL

export const API = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

const cookies = new Cookies()

API.interceptors.request.use(config => {
    const token = cookies.get('jwt')

    config.headers.Authorization = `Bearer ${token}`;
    return config
})