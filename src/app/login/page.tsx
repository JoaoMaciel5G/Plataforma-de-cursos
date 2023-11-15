"use client"

import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"

const createUserFormSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Formato de email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
})

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const {register,
    handleSubmit,
    formState: {errors}} = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  type createUserFormData = z.infer<typeof createUserFormSchema>

  const showAndHiddenPassword = () => {
    setShowPassword(!showPassword)
  }

  const onSubmit = (data: any) => {
    
  }
  
  return (
    <section className="h-full bg-violet-650 flex items-center justify-center">
        <form className="bg-white mx-5 max-md:w-96 md:w-[500px] rounded-2xl p-16">
            <div className="pb-10">
                <h2 className="font-medium text-5xl">Login</h2>
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
                        {showPassword ? <EyeOff onClick={showAndHiddenPassword} className="cursor-pointer"/> : <Eye onClick={showAndHiddenPassword} className="cursor-pointer"/>}
                    </div>
                    {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                </div>
            </div>
            <div className="flex justify-center bg-violet-650 rounded-md py-4 cursor-pointer text-white hover:bg-violet-800 mb-4">
              <button onClick={() => handleSubmit(onSubmit)()} className="w-full">Entrar</button>
            </div>
            <Link className="font-semibold underline" href="forgot-password">Esqueceu sua senha?</Link>
        </form>
    </section>
  )
}