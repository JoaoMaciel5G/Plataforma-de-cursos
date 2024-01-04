"use client"

import { createContext, ReactNode, useState} from "react"
import {setCookie} from "cookies-next"
import { useRouter } from 'next/navigation'
import { signInRequest } from "./auth"

type UserData = {
    name: string,
    email: string,
    password: string
}

type AuthContextType ={
    error: string | undefined,
    user: UserData | undefined,
    signIn: (data: UserData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: {children: ReactNode}){
    const router = useRouter()

    const [user, setUser] = useState<UserData | undefined>()
    const [error, setError] = useState()

    async function signIn(data: UserData) {
        const {token, userData, error} = await signInRequest(data)

        setUser(userData)

        if(error){
            setError(error)
            return
        }

        setCookie("token", token, {
            maxAge: 60 * 60 * 24 * 2 //2 days
        })

        router.push("/home")
    }

    return(
        <AuthContext.Provider value={{ error, user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

