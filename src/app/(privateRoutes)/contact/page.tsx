"use client"

import { Mail, Phone } from "lucide-react"
import { toast, ToastContainer } from 'react-toastify';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import "react-toastify/dist/ReactToastify.css";

export default function Contact(){
    const contactFormSchema = z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().min(1, "Email é obrigatório").email("Formato de email inválido"),
        contact_message: z.string().min(1, "Descreva o seu problema").max(600, "Limite de 600 caracteres excedido")
    })

    const {register, handleSubmit, formState, setValue} = useForm<contactFormData>({
        resolver: zodResolver(contactFormSchema)
    })
    
    const {errors} = formState

    type contactFormData = z.infer<typeof contactFormSchema>

    const notifyCongratulationSuccessContact = () => toast.success("Seu email foi enviado, iremos retornar o contato em breve")

    const onSubmit = () => {
        setValue("name", "")
        setValue("email", "")
        setValue("contact_message", "")
        if(Number(!Object.keys(errors).length) > 0){
          notifyCongratulationSuccessContact()  
        }
    }

    return(
        <main className="flex flex-col items-center">
            <ToastContainer 
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="my-14">
                <h2 className="font-semibold text-6xl">Entrar em contato</h2>
            </div>
            <section className="flex max-md:flex-col">
                <div className="w-2/6 px-10 max-md:w-full">
                    <h2 className="font-semibold text-3xl uppercase my-3">Não seja timido</h2>
                    <p className="my-3">Fique a vontade para fazer a sua pergunta, ou entrar em contato em caso de dúvida, reembolso, problema com a compra dos cursos, ou qualquer outro assunto</p>
                    <div className="flex items-center my-3">
                        <Mail size={60} className="text-purple mr-5"/>
                        <p className="text-lg">Ou envie um e-mail direto para a nossa central: <span className="font-semibold">protechcursos@gmail.com</span></p>
                    </div>
                    <div className="flex items-center my-3">
                        <Phone size={60} className="text-purple mr-5"/>
                        <p className="text-lg">Urgência? Ligue para a nossa central para atendimento mais rápido: <span>+55 1156780675</span></p>
                    </div>
                </div>
                <div className="w-4/6 max-md:w-full px-6">
                    <div>
                        <div className="my-5">
                            <input type="text" placeholder="Coloque o seu nome" className="w-full outline-none p-3 text-lg rounded-lg border-2 border-purple" {...register("name")}/>
                            {errors.name && <span className="text-red-700">{errors.name.message}</span>}
                        </div>
                        <div className="my-5">
                            <input type="text" placeholder="Digite seu email" className="w-full outline-none p-3 text-lg rounded-lg border-2 border-purple" {...register("email")}/>
                            {errors.email && <span className="text-red-700">{errors.email.message}</span>}
                        </div>
                        <div className="my-5">
                            <textarea placeholder="Escreva aqui a sua dúvida ou seu problema com detalhes" className="w-full outline-none p-3 text-lg rounded-lg border-2 h-60 resize-none border-purple" {...register("contact_message")}/>
                            {errors.contact_message && <span className="text-red-700">{errors.contact_message.message}</span>}
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2"/>
                            <label>Eu aceito os termos de privacidade</label>
                        </div>
                        <div className="my-6">
                            <button onClick={()=> handleSubmit(onSubmit)()} className="bg-purple py-3 px-8 text-white rounded-full text-lg hover:bg-violet-650">Enviar</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}