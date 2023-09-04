import { AuthResponse } from './../types/response/AuthResponse';
import axios from 'axios';
import { IUser } from '../types/IUser';
import { makeAutoObservable } from 'mobx';
import AuthService from '../services/AuthService';
import { API_URL } from '../http';

export default class userStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    constructor() {

        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }
    setUser(user: IUser) {
        this.user = user;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool
    }
    async login(email: string, password: string) {
        let check
        try {
            await AuthService.login(email, password).then((user) => {
                localStorage.setItem('token', user.data.token);
                localStorage.setItem('username', email);
                localStorage.setItem('id', password);
                this.setUser(user.data);
                check = user.status.toString
            })

        } catch (e: any) {
            console.log(e.response?.data?.message);
            check = false
        }
        return check
    }
    async registration(email: string, password: string) {
        let check
        try {
            const user = await AuthService.registration(email, password)
            localStorage.setItem('token', user.data);            
            localStorage.setItem('username', email);
            localStorage.setItem('id', password);
            this.setUser(user.data)
            check = true
        } catch (e: any) {
            console.log(e.response?.data?.message);
            check = false
        }
        return check
    }
    async logout() {
        await AuthService.logout(String(localStorage.getItem('username')));
        this.setAuth(false);
    }
    async refresh() {
        try {
            let token = String(localStorage.getItem('token'));
            const user = await AuthService.refresh(String(localStorage.getItem('username')), token);
            localStorage.setItem('token', user.data);
            this.setAuth(true)//нид поменять чтобы если выкидывало ошибку, то чтобы ставилось фолз
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
    async checkAuth() {
        try {
            this.setLoading(true)
            let token = String(localStorage.getItem('token'));
            const response = await AuthService.check(token);
            this.setAuth(true)
            this.setUser(response.data.token)
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}