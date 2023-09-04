import { AxiosResponse } from "axios";
import  $host from "../http";
import { IUser } from "../types/IUser";

export default class AuthService{      
    user = {} as IUser;
    
    
    static async login(email:string, password: string)/*:Promise<AxiosResponse<IUser>>*/{
        return $host.post('/api/auth/signin', {email, password},{withCredentials:true})
    }
    static async registration(email:string, password: string)/*:Promise<AxiosResponse<IUser>>*/{
        return $host.post('api/auth/signup', {email, password,role:'admin'},{withCredentials:true})
    }
    static async logout(email:string){
        return $host.post('api/auth/logout',{email})
    }
    static async check(token:string){
        return $host.post('api/auth/check',{token}, {withCredentials: true})
    }
    static async refresh(email:string, token:string){
        return $host.post('api/auth/refresh',{token, email}, {withCredentials: true})
    }
}