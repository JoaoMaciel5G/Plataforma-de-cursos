import Image from "next/image"
import selo from "@/assets/selo-garantia.png"

export default function Guaranty(){
    return(
        <section className="flex my-6 py-10 px-5 bg-white justify-between max-md:flex-col">
            <div>
                <div>
                    <h2 className="font-bold text-2xl my-4 text-center">Experimente por 7 dias</h2>
                </div>
                <div>
                    <p className="text-lg my-3">Para que você possa aproveitar 100% de tudo isso você está coberto pela garantia</p>
                    <div>
                        <ul>
                            <li className="text-lg font-semibold my-2">1.Garantia de todo seu dinheiro de volta</li>
                            <li className="text-lg font-semibold my-2">2.Garantia dos cursos totalmente atualizados</li>
                            <li className="text-lg font-semibold my-2">3.Garantia de suporte premium</li>
                        </ul>
                    </div>
                    <p className="text-lg">Com esta garantia você terá a certeza de ter feito o seu melhor investimento em um curso, um curso atualizado e recebendo sempre o melhor suporte.</p>
                </div>
                <div className="flex justify-center my-7">
                    <a href="/signIn" className="w-full"><button className="bg-aqua rounded-md w-full text-purple text-lg font-semibold py-3 px-3 hover:bg-purple hover:text-aqua">Quero ser um programador 11 estrelas</button></a>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Image className="w-[60%] lg:w-[40%]" src={selo} alt="selo de garantia de sete dias"/>
            </div>
        </section>
    )
}