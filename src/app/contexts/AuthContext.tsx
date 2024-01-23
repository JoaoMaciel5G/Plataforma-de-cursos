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
    createUserError: string | undefined,
    signIn: (data: UserData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: {children: ReactNode}){
    const router = useRouter()

    const [createUserError, setCreateUserError] = useState<string | undefined>()

    async function signIn(data: UserData) {
        const {token, userData, error} = await signInRequest(data)

        if(error){
            setCreateUserError(error)
            return
        }

        setCookie("token", token, {
            maxAge: 60 * 60 * 24 * 2 //2 days
        })

        router.push("/home")
    }

    return(
        <AuthContext.Provider value={{ createUserError, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

