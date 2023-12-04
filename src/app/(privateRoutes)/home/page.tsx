import CourseItems from "../componentsPrivateRoute/CourseItems"
import { Playfair_Display } from "next/font/google"
import Link from "next/link"

const playFair = Playfair_Display({weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"]})

export default function Home(){
    return(
            <main className="flex flex-col items-center w-full">
                <div>
                    <h2 className={`${playFair.className} text-3xl font-extrabold my-5 text-zinc-800`}>Uma ampla variedade de cursos pra você</h2>
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
                <section>
                    <div>
                        <h2 className={`${playFair.className} text-3xl font-extrabold my-5 text-zinc-800 text-center`}>Aproveite nossos planos</h2>
                    </div>
                    <div className="flex justify-around gap-12 my-8">
                        <div className="flex flex-col justify-center items-center border-[1px] border-purple p-3">
                            <h2 className="text-5xl font-light my-5 text-center">1 mês</h2>
                            <div className="flex">
                                <p className="line-through text-xl mx-3">R$ 269,90</p>
                                <p className="text-xl">Por apenas R$ 169,90</p> 
                            </div>
                            <Link href="/plains" className="text-lg bg-purple text-white p-2 rounded-lg hover:bg-violet-650 my-5">Saber mais</Link>
                        </div>
                        <div className="flex flex-col justify-center items-center border-[1px] border-purple p-3">
                            <h2 className="text-5xl font-light my-5 text-center">5 mês</h2>
                            <div className="flex">
                                <p className="line-through text-xl mx-3">R$ 1.119,90</p>
                                <p className="text-xl">Por apenas R$ 899,90</p> 
                            </div>
                            <Link href="/plains" className="text-lg bg-purple text-white p-2 rounded-lg hover:bg-violet-650 my-5">Saber mais</Link>
                        </div>
                        <div className="flex flex-col justify-center items-center border-[1px] border-purple p-3">
                            <h2 className="text-5xl font-light my-5 text-center">1 ano</h2>
                            <div className="flex">
                                <p className="line-through text-xl mx-3">R$ 1.899,90</p>
                                <p className="text-xl">Por apenas R$ 1.699,90</p> 
                            </div>
                            <Link href="/plains" className="text-lg bg-purple text-white p-2 rounded-lg hover:bg-violet-650 my-5">Saber mais</Link>
                        </div>
                    </div>
                </section>
            </main>
    )
}