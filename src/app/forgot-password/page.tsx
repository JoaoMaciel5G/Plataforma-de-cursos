"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Spinner from "../components/Spinner"
import { ForgotPassword } from "../contexts/forgotPassword"
import { useContext, useEffect, useState } from "react"
import Link from "next/link"

type emailType = {
  email: string
}

const createUserFormSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Formato de email inválido"),
})

export default function ForgotPasswd() {
  const [uri, setUri] = useState<string|undefined>()

  const {
    register, 
    handleSubmit, 
    formState: {errors, isSubmitting}
  } = useForm<createUserFormData>({resolver: zodResolver(createUserFormSchema)})
  
  useEffect(()=>{
    const href = window.location.origin

    setUri(href)
  }, [])

  const {sendPassword, error} = useContext(ForgotPassword)

  type createUserFormData = z.infer<typeof createUserFormSchema>

  const onSubmit = async (data: emailType) => {
    return await sendPassword(data.email, uri!)
  }
  
  return (
    <section className="h-full pt-4 bg-violet-650">
        <div className="rounded-full bg-zinc-50 flex justify-center w-24 mx-4">
          <Link href="/login" className="px-4 py-3">Voltar</Link>
        </div>
        <div className="flex items-center justify-center h-5/6">
          <div className="bg-white mx-5 max-md:w-96 md:w-[500px] rounded-2xl p-16">
              <div className="pb-10">
                  <h2 className="font-medium text-4xl">Esqueceu sua senha?</h2>
              </div>
              <div>
                  <div>
                    <label htmlFor="email">Endereço de Email</label>
                  </div>
                  <input type="text" className="outline-none p-3 border-2 border-zinc-300 hover:border-purple transition-[border] ease-in-out duration-300 rounded-md w-full" placeholder="Digite o seu email de cadastro" {...register("email")}/>
                  {errors.email && <span className="text-red-700">{errors.email.message}</span>}
              </div>
              {error && <span className="text-red-700">{error}</span>}
              {isSubmitting ? <Spinner/> : <button onClick={() => handleSubmit(onSubmit)()} className="bg-violet-650  rounded-lg py-4 cursor-pointer text-white hover:bg-violet-800 w-full my-4">Redefinir senha</button>}
          </div>
        </div>
    </section>
  )
}