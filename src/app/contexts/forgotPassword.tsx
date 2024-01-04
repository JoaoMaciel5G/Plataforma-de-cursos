"use client"

import { createContext, ReactNode, useState} from "react"
import { forgotRequest } from "./forgot"

type ForgotPasswordType ={
    error: string | undefined,
    sendPassword: (email: string, uri: string) => Promise<void>,
}

export const ForgotPassword = createContext({} as ForgotPasswordType)

export function ForgotPasswordProvider({children}: {children: ReactNode}){
    const [error, setError] = useState<string>()

    async function sendPassword(email: string, uri: string){
        const forgotData = await forgotRequest(email, uri)
        console.log(forgotData)

        if(forgotData.error){
            setError(forgotData.error)
            return
        }
        return forgotData
    }

    return(
        <ForgotPassword.Provider value={{error, sendPassword}}>
            {children}
        </ForgotPassword.Provider>
    )
}