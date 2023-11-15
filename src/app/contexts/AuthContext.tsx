"use client"

import { createContext, ReactNode, useState} from "react"
import {setCookie} from "nookies"
import { useRouter } from 'next/navigation'
import { signInRequest } from "./auth"

type UserData = {
    name: string,
    email: string,
    password: string
}

type AuthContextType ={
    isAuthenticated: boolean,
    user: UserData | undefined,
    signIn: (data: UserData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: {children: ReactNode}){
    const router = useRouter()

    const [user, setUser] = useState<UserData | undefined>()

    const isAuthenticated = !!user

    async function signIn(data: UserData) {
        const {token, userData} = await signInRequest(data)

        setUser(userData)

        setCookie(undefined, "token", token, {
            maxAge: 60 * 60 * 24 //24 hours
        })

        router.push("/explorecourses")
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, user, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

