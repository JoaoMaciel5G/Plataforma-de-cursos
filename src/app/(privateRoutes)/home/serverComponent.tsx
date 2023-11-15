"use client"

import { redirect } from 'next/navigation'
import jwt, {TokenExpiredError} from "jsonwebtoken"
import useAsyncEffect from 'use-async-effect'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Loading from '../../loading'
import Header from '../componentsPrivateRoute/Header'

type Props ={ 
    cookies: {
        name: string,
        value: string
    },
    hasCookie: boolean,
    deleteCookie: () => Promise<void>,
    secret: string | undefined
}

export default function Home({cookies, hasCookie, deleteCookie, secret}: Props){
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    if(!hasCookie){
        redirect("/signIn")
    }

    if(cookies){
        const getCookie = cookies.value
        const checkToken = async () => {
            try {
                const decodetoken = jwt.verify(getCookie, secret!);
                console.log(decodetoken)
                setLoading(false)
                return
            } catch (error) {
                if(error instanceof TokenExpiredError){//se o token estiver expirado, ele é redirecionado a fazer login novamente
                    await deleteCookie() 
                    setLoading(false)
                    router.push("/login")
                }
                await deleteCookie() 
                setLoading(false)
                router.push("/signIn")
            };
        }

        useAsyncEffect(async () => {
            await checkToken()
        }, []);
    }

    if (loading) {
        return (
            <Loading/>
        )
    }

    return(
        <main>
            <Header/>
        </main>
    )
}