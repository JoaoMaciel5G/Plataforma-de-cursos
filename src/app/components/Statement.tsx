import { CheckListItem } from "./CheckListItem";
import TextList from "./TextLists";
import { Star, Check } from "lucide-react";

export default function Statement(){
    return(
        <section className="flex flex-col xl:flex-row xl:justify-around mx-3">
            <div className="xl:w-1/2 p-10">
                <div>
                    <div>
                        <h2 className="font-semibold text-3xl my-4 text-center">Sua jornada como um novo programador</h2>
                    </div>
                    <TextList/>
                </div>
                <div>
                    <div className="my-8">
                        <h2 className="text-3xl font-semibold text-center">Transforme os seus sonhos em realidade com a programação</h2>
                    </div>
                    <CheckListItem>Se destaque no mercado de trabalho com o módulo de Linkedin e curriculo</CheckListItem>
                    <CheckListItem>Seja um programador acima da média, com as técnicas e arquitetura de software que será ensinado</CheckListItem>
                    <CheckListItem>Aprenda as tecnologias mais atuais requisitadas no mercado de tecnologia</CheckListItem>
                    <CheckListItem>Aprenda soft-skills e se detaque em entrevistas, e se torne um funcionário indispensável</CheckListItem>
                    <div className="flex justify-center my-4 ">
                        <a href="/signIn" className="w-1/2 max-md:w-full"><button className="bg-aqua rounded-md w-full text-purple text-lg font-semibold py-3  hover:bg-purple hover:text-aqua">Quero ser um programador 11 estrelas</button></a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center xl:w-1/2">
                <div className="p-10 bg-zinc-400 rounded-xl xl:w-[500px]">
                    <h2 className="text-white font-semibold text-2xl">O que você vai receber</h2>
                    <div>
                        <div className="flex my-4">
                            <Star className="text-yellow-500 mx-2"/>
                            <p className="text-white">Nova trilha de Inteligência artificial: desenvolvimento de IA</p>
                        </div>
                        <div className="flex my-4">
                            <Star className="text-yellow-500 mx-2"/>
                            <p className="text-white">Acesso imediato a TODOS os programas da plataforma</p>
                        </div>
                        <div className="flex my-4">
                            <Check className="text-purple mx-2"/>
                            <p className="text-white">Metodologia validada por + de 51 mil alunos</p>
                        </div>
                        <div className="flex my-4">
                            <Check className="text-purple mx-2"/>
                            <p className="text-white">Aulas gravadas pra assistir no seu ritmo</p>
                        </div>
                        <div className="flex my-4">
                            <Check className="text-purple mx-2"/>
                            <p className="text-white">Novas atualizações e conteúdos todos os meses</p>
                        </div>
                        <div className="flex my-4">
                            <Check className="text-purple mx-2"/>
                            <p className="text-white">Renove o segundo ano de assinatura pelo mesmo preço ao final do acesso</p>
                        </div>
                        <div className="flex my-4">
                            <Check className="text-purple mx-2"/>
                            <p className="text-white">Diversos certificados e mais de 76 projetos e desafios práticos</p>
                        </div>
                        <div className="flex my-4">
                            <Check className="text-purple mx-2"/>
                            <p className="text-white">7 dias de Garantia</p>
                        </div>
                    </div>
                    <button className="w-full text-white bg-violet-600 rounded-lg py-5 font-semibold text-lg tracking-wider hover:bg-violet-650">Quero Assinar</button>
                    <p className="text-center pt-10 font-semibold text-xl text-black">Desconto de R$ 100 no plano mensal</p>
                </div>
            </div>
        </section>
    )
}