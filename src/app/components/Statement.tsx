import { CheckListItem } from "./CheckListItem";
import CheckListRightSide from "./CheckListRightSide";
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
            <CheckListRightSide/>
        </section>
    )
}