import { CheckListItem } from "./CheckListItem";
import TextList from "./TextLists";

export default function Statement(){
    return(
        <>
            <section className="my-10">
                <div>
                    <h2 className="font-semibold text-3xl my-4 text-center">Você está apenas começando uma nova etapa na sua vida como programador...</h2>
                </div>
                <TextList/>
            </section>
            <section>
                <div className="my-8">
                    <h2 className="text-3xl font-semibold text-center">Transforme os seus sonhos em realidade com a programação</h2>
                </div>
                <CheckListItem>Se destaque no mercado de trabalho com o módulo de Linkedin e curriculo</CheckListItem>
                <CheckListItem>Seja um programador acima da média, com as técnicas e arquitetura de software que será ensinado</CheckListItem>
                <CheckListItem>Aprenda as tecnologias mais atuais requisitadas no mercado de tecnologia</CheckListItem>
                <CheckListItem>Aprenda soft-skills e se detaque em entrevistas, e se torne um funcionário indispensável</CheckListItem>
                <div className="flex justify-center my-4">
                    <a href="/signIn" className="w-full"><button className="bg-aqua rounded-md w-full text-purple text-lg font-semibold py-3 px-3 hover:bg-purple hover:text-aqua">Quero ser um programador 11 estrelas</button></a>
                </div>
            </section>
        </>
    )
}