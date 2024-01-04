"use client"

import { useForm } from "react-hook-form"
import { Eye, EyeOff } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Spinner from "@/app/components/Spinner"
import { useState } from "react"
import { useContext } from "react"
import { ChangePassWord } from "@/app/contexts/changePassword"
import { getIdUser } from "./id"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

type ChangePassType = { 
    password: string,
    confirm_password: string
}

const createUserFormSchema = z.object({
    password: z.string().min(1, "Senha é obrigatória").min(6, "A senha precisa de no minimo 6 caracteres"),
    confirm_password: z.string().min(1, "Confirmar a senha é obrigatório")
}).refine((data)=>data.password === data.confirm_password, {
    message: "As senhas precisam ser iguais",
    path: ["confirm_password"],
})

export default function ChangePasswordCl({token}: {token: string}) {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const {changePassword} = useContext(ChangePassWord)

  const {
    register, 
    handleSubmit, 
    formState: {errors, isSubmitting}} = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  type createUserFormData = z.infer<typeof createUserFormSchema>

  const notifyErrorChangePassword = () => toast.error(`Erro ao trocar sua senha`)
  const notifySuccessChangePassword = () => toast.success(`Sua senha foi trocada com sucesso`)
  
  const onSubmit = async ({password}: ChangePassType) => {
    const id = await getIdUser(token)
    const res = await changePassword(password, id.message)
    if(res.message){
      notifySuccessChangePassword()
      router.push("/login")
      return
    }
    notifyErrorChangePassword()
  }
  
  return (
    <section className="h-full bg-violet-650 flex items-center justify-center">
        <div className="bg-white mx-5 max-md:w-96 md:w-[500px] rounded-2xl p-16">
            <div className="pb-10">
                <h2 className="font-medium text-4xl">Cadastre uma senha</h2>
            </div>
            <div className="mb-4">
                <div>
                  <label htmlFor="passwd">Nova senha</label>  
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
            {isSubmitting ? <Spinner/> : <button onClick={() => handleSubmit(onSubmit)()} className="bg-violet-650  rounded-lg py-4 cursor-pointer text-white hover:bg-violet-800 w-full my-4">Redefinir senha</button>}
        </div>
    </section>
  )
}