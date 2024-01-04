"use client"

import { useEffect } from "react"
import {useShoppingCart} from "use-shopping-cart"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Success ({params}: {params: {sessionId: string}}){
    const { clearCart } = useShoppingCart()
    const router = useRouter()

    useEffect(()=>{
        clearCart()
        setTimeout(()=>{
            router.push("/home")
        }, 3000)
    }, [])
    
    return(
        <main className="flex flex-col justify-center items-center">
            <Check className="w-24 h-24 text-green-500"/>
            <div>
                <h2 className="text-2xl">Obrigado e parabéns pela compra</h2>
                <p className="text-lg">Você receberá no seu email o acesso aos cursos.</p>
            </div>
        </main>
    )
}