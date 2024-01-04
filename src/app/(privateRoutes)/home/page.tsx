import { PlainSignatures } from "@/app/types"
import CourseItems from "../componentsPrivateRoute/CourseItems"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"

const playFair = Playfair_Display({weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"]})

export default async function Home(){
    const url = process.env.URL

    const response = await fetch(`${url}/getPlains`)
    const data = await response.json()

    return(
            <main className="flex flex-col items-center w-full px-4">
                <div className="max-[1000px]:text-center">
                    <h2 className={`${playFair.className} text-3xl font-extrabold my-5 text-zinc-800`}>Uma ampla variedade de cursos pra você</h2>
                </div>
                <section className="border-[1px] border-zinc-400 w-4/5 px-4 overflow-hidden">
                    <div className="w-1/2 mt-10 mb-5 max-[1310px]:w-full max-[1310px]:text-center">
                        <h2 className="font-semibold text-2xl text-zinc-800">Amplie suas oportunidades de carreira com o desenvolvimento web</h2>
                    </div>
                    <div className="w-2/3 mb-10 max-[1310px]:w-full max-[1310px]:text-center">    
                        <p>Se você quer se tornar um programador melhor, um lider melhor, melhorar capacidades de lógica de programação, melhorar seu linkedin e se tornar um profissional indispensável, a Pro Tech pode te proporcinar tudo isso e muito mais, venha com a gente e conheça nossos cursos</p>
                    </div>
                    <CourseItems/>
                </section>
                <section>
                    <div>
                        <h2 className={`${playFair.className} text-3xl font-extrabold my-5 text-zinc-800 text-center`}>Aproveite nossos planos</h2>
                    </div>
                    <div className="flex justify-around gap-12 my-8 max-[940px]:flex-col">
                            {
                                data.map((plain: PlainSignatures)=>{
                                    const price = parseInt(plain.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                                    const valueDiscount = parseInt(plain.totalValue).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

                                    return(
                                        <div key={plain.plain_id} className="flex flex-col justify-center items-center border-[1px] border-purple p-3">
                                            <h2 className="text-5xl font-light my-5 text-center">{plain.plain_name}</h2>
                                            <div className="flex justify-between">
                                                <p className="line-through text-xl mx-3">{price}</p>
                                                <p className="text-xl">Por apenas {valueDiscount}</p> 
                                            </div>
                                            <Link href="/plains" className="text-lg bg-purple text-white p-2 rounded-lg hover:bg-violet-650 my-5">Saber mais</Link>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </section>
            </main>
    )
}