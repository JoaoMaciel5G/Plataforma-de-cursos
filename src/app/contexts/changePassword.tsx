"use client"

import { createContext, ReactNode} from "react"
import { changePasswordRequest } from "./change"

type ChangePasswordType ={
    changePassword: (password: string, id: string) => Promise<{error: string, message: string}>,
}

export const ChangePassWord = createContext({} as ChangePasswordType)

export function ChangePasswordProvider({children}: {children: ReactNode}){
    async function changePassword(password: string, id: string){
        return await changePasswordRequest(password, id)
    }

    return(
        <ChangePassWord.Provider value={{changePassword}}>
            {children}
        </ChangePassWord.Provider>
    )
}