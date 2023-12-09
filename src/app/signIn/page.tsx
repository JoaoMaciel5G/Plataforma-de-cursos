"use client"

import { Eye, EyeOff } from "lucide-react"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { AuthContext } from "../contexts/AuthContext"
import Spinner from "../components/Spinner"
import { UserData } from "../types"

const createUserFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Formato de email inválido"),
  password: z.string().min(1, "Senha é obrigatória").min(6, "A senha precisa de no minimo 6 caracteres"),
  confirm_password: z.string().min(1, "Confirmar a senha é obrigatório"),
}).refine((data)=>data.password === data.confirm_password, {
  message: "As senhas precisam ser iguais",
  path: ["confirm_password"],
})

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const { signIn, error } = useContext(AuthContext)

  const {register, handleSubmit, formState} = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  const {isSubmitting, errors} = formState

  type createUserFormData = z.infer<typeof createUserFormSchema>

  const onSubmit = async ( { name, email, password }: UserData) => {
    const userData = {
      email,
      name,
      password
    }

    return await signIn(userData)
  }

  return (
    <section className="h-full bg-violet-650 flex items-center justify-center">
        <div className="bg-white mx-5 max-md:w-96 md:w-[500px] rounded-2xl p-16">
            <div className="pb-10">
                <h2 className="font-medium text-5xl">Sign In</h2>
                <p className="text-lg mt-3">Cadastre-se para entrar</p>
            </div>
            <div className="mb-4">
                <div>
                  <label htmlFor="name">Nome de usuário</label>  
                </div>
                <input type="text" className="outline-none p-3 border-2 border-zinc-300 hover:border-purple transition-[border] ease-in-out duration-300 rounded-md w-full" {...register("name")}/>
                {errors.name && <span className="text-red-700">{errors.name.message}</span>}
            </div>
            <div className="mb-4">
                <div>
                  <label htmlFor="email">Endereço de Email</label>  
                </div>
                <input type="text" className="outline-none p-3 border-2 border-zinc-300 hover:border-purple transition-[border] ease-in-out duration-300 rounded-md w-full" {...register("email")}/>
                {errors.email && <span className="text-red-700">{errors.email.message}</span>}
            </div>
            <div className="mb-4">
                <div>
                  <label htmlFor="passwd">Senha</label>  
                </div>
                <div>
                    <div className=" p-3 border-2 flex border-zinc-300 hover:border-purple transition-[border] ease-in-out duration-300 rounded-md w-full">
                        <input type={showPassword ? 'text' : 'password'} className="outline-none w-full" {...register("password")}/>
                        {showPassword ? <EyeOff onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer"/> : <Eye onClick={()=>setShowPassword(!showPassword)} className="cursor-pointer"/>}
                    </div>
                    {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                </div>
            </div>
            <div>
                <div>
                  <label htmlFor="passwd">Confirme a senha</label>  
                </div>
                <div>
                    <div className=" p-3 border-2 flex border-zinc-300 hover:border-purple transition-[border] ease-in-out duration-300 rounded-md w-full">
                        <input type={showPassword ? 'text' : 'password'} className="outline-none w-full" {...register("confirm_password")}/>
                    </div>
                    {errors.confirm_password && <span className="text-red-700">{errors.confirm_password.message}</span>}
                </div>
            </div>
            <div className="mb-4">
              {error && <span className="text-red-700">{error}</span>}
            </div>
            {isSubmitting ? <Spinner/> : <button onClick={() => handleSubmit(onSubmit)()} className=" bg-violet-650  rounded-lg py-4 cursor-pointer text-white hover:bg-violet-800 w-full">Cadastrar-se</button>}
            <p className="mt-2">Já tem conta? <Link href="/login" className="underline font-semibold">Faça login</Link></p>
        </div>
    </section>
  )
}