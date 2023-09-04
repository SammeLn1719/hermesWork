import style from "./../../assets/styles/admin.module.scss"
import { observer } from 'mobx-react-lite';
import React, { Component, FC, useContext, useEffect, useState } from 'react';
import { Context } from '../../../index';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { LOGIN_ROUTER, REGISTRATION_ROUTER, SHOP_ROUTER, CATALOG_ROUTE } from "../../../utils/consts";
import userStore from "../../../utils/userStore";




const Auth: FC = observer(() => {
    const { useStore } = useContext(Context)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [emailDirty, setEmailDirty] = useState<boolean>(false)
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<string>('Емейл не может быть рустым')
    const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState<boolean>(false)

    console.log(useStore)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])
    const emailHandler = (e: any) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTER
    async function bigPenis() {
        try {
            if (isLogin) {
                useStore.login(email, password).then((value) => {
                    if (!value) {
                        //alert("login field")
                        useStore.setAuth(false)
                    } else {
                        //alert("login success")
                        useStore.setAuth(true)
                    }
                }
                )

            } else {
                const value = await useStore.registration(email, password)
                //alert(value)
                if (!value) {
                    //alert("registration field")
                    useStore.setAuth(false)
                } else {
                    //alert("registration success")
                    useStore.setAuth(true)

                }
            }
        } catch (e: any) {
            console.log(4)
        }
        return useStore.isAuth
    }
    const click = (e: any) => {
        e.preventDefault();
        bigPenis().then(() => {
            if (useStore.isAuth)
                navigate(CATALOG_ROUTE)
            return true
        }
        )
    }
    /*const click = async ())=> {
         bigPenis() 
         
        
    }
    }*/

    return <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-blue-600 lg:max-w-xl"><form onSubmit={e => click(e)}>
        <h1 className="text-3xl font-semibold text-blue-800 text-center underline uppercase ">{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
        <p className="font-medium text-blue-800 hover:underline">Почта:</p>
        <p>{(emailDirty && emailError) && <div className="text-red-800">{emailError}</div>}</p>
        <input className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-700 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your email..." />
        <p className="font-medium text-blue-800 hover:underline">Пароль:</p>
        {(passwordDirty && passwordError) && <div className="text-red-800">{passwordError}</div>}
        <input className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-700 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Enter your password..." />
        <NavLink to="#" className="text-xs text-blue-800 hover:underline">Забыть пароль?</NavLink>
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-600" disabled={!formValid} type="submit">{isLogin ? 'Войти' : 'Регистрация'}</button>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
            У вас нет аккаунта?{" "}
            {isLogin ?
                <NavLink className="font-medium text-blue-700 hover:underline" to={REGISTRATION_ROUTER}>Регистрация</NavLink>
                :
                <NavLink className="font-medium text-blue-700 hover:underline" to={LOGIN_ROUTER}>Авторизация</NavLink>
            }
        </p>
    </form>
    </div>
})

export default Auth;