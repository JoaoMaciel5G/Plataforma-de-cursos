import jwt, {TokenExpiredError} from "jsonwebtoken"
import { redirect} from 'next/navigation'
import { destroyCookie } from "nookies"
import CourseItems from "../componentsPrivateRoute/CourseItems"
import {cookies} from "next/headers"

type Props ={ 
    cookies: {
        name: string,
        value: string
    },
    hasCookie: boolean,
    secret: string | undefined
}

export default function Home(){
    const cookie = cookies().get("token")
    const hasCookie = cookies().has("token")
    
    const secretKey = process.env.SECRET_KEY

    if(cookie){
        const getCookie = cookie.value

        const decodetoken = jwt.verify(getCookie, secretKey!, (error, decoded)=>{
            if(error){
                if(error instanceof TokenExpiredError){//se o token estiver expirado, ele é redirecionado a fazer login novamente
                    destroyCookie(undefined, "token")
                    redirect("/login")
                }
                destroyCookie(undefined, "token")
                redirect("/signIn")
            }
        });
    }

    if(!hasCookie){
        redirect("/signIn")
    }

    return(
            <main className="flex flex-col items-center w-full">
                <div>
                    <h2>Uma ampla variedade de cursos pra você</h2>
                </div>
                <section className="border-[1px] border-zinc-400 w-4/5 px-4">
                    <div className="w-1/2 mt-10 mb-5">
                        <h2 className="font-semibold text-2xl text-zinc-800">Amplie suas oportunidades de carreira com o desenvolvimento web</h2>
                    </div>
                    <div className="w-2/3 mb-10">    
                        <p>Se você quer se tornar um programador melhor, um lider melhor, melhorar capacidades de lógica de programação, melhorar seu linkedin e se tornar um profissional indispensável, a Pro Tech pode te proporcinar tudo isso e muito mais, venha com a gente e conheça nossos cursos</p>
                    </div>
                    <CourseItems/>
                </section>
            </main>
    )
}