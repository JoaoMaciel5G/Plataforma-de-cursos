"use client"

import { createContext, ReactNode, useState} from "react"
import { loginRequest } from "./login"
import { Login } from "../types"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"

type LoginType ={
    login: (data: Login) => Promise<void>,
    error: string | undefined
}

export const LoginContext = createContext({} as LoginType)

export function LoginProvider({children}: {children: ReactNode}){
    const [error, setError] = useState()
    const router = useRouter()

    async function login(data: Login){
        const loginData = await loginRequest(data)

        if(loginData.error){
            setError(loginData.error)
            return
        }
        
        setCookie("token", loginData.newToken, {
            maxAge: 60 * 60 * 24 * 2 //2 days
        })

        router.push("/home")
    }

    return(
        <LoginContext.Provider value={{login, error}}>
            {children}
        </LoginContext.Provider>
    )
}

