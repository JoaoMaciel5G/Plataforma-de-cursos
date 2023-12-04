import StarCheckList from "./StarCheckRightSide";
import ItemCheckRightSide from "./ItemCheckRightSide";

export default function CheckListRightSide(){
    return(
        <div className="flex justify-center items-center xl:w-1/2">
                <div className="p-10 bg-zinc-400 rounded-xl xl:w-[500px]">
                    <h2 className="text-white font-semibold text-2xl">O que você vai receber</h2>
                    <div>
                        <StarCheckList>Nova trilha de Inteligência artificial: desenvolvimento de IA</StarCheckList>
                        <StarCheckList>Acesso imediato a TODOS os programas da plataforma</StarCheckList>
                        <ItemCheckRightSide>Metodologia validada por + de 51 mil alunos</ItemCheckRightSide>
                        <ItemCheckRightSide>Aulas gravadas pra assistir no seu ritmo</ItemCheckRightSide>
                        <ItemCheckRightSide>Novas atualizações e conteúdos todos os mese</ItemCheckRightSide>
                        <ItemCheckRightSide>Renove o segundo ano de assinatura pelo mesmo preço ao final do acesso</ItemCheckRightSide>
                        <ItemCheckRightSide>Diversos certificados e mais de 76 projetos e desafios práticos</ItemCheckRightSide>
                        <ItemCheckRightSide>7 dias de Garantia</ItemCheckRightSide>
                    </div>
                    <button className="w-full text-white bg-violet-600 rounded-lg py-5 font-semibold text-lg tracking-wider hover:bg-violet-650">Quero Assinar</button>
                    <p className="text-center pt-10 font-semibold text-xl text-black">Desconto de R$ 100 no plano mensal</p>
                </div>
            </div>
    )
}