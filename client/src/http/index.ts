import axios from "axios";
import { config } from "process";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})
//new token auth
export const API_URL = `http://localhost:8080/api`
const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

$api.interceptors.request.use((config)=>{
        config.headers.Authorization = `${localStorage.getItem('token')}`
        return config;
})

export default $api;
//end new token


const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// const authInterceptor = config => {
//     config.headers.authorization = `${localStorage.getItem('token')}`
//     return config
// }

// $authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}