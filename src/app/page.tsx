"use client"
import {Check} from "lucide-react"

export function CheckListItem({children}: {children: React.ReactNode}){
  return(
    <div className="flex items-center my-2">
      <div className="rounded-full px-1 mr-2 py-1 bg-purple flex items-center justify-center">
            <Check color="#26cd23" size={20}/>
      </div>
      <p className="font-medium">{children}</p>
    </div>
  )
}

export default function Home() {
  const scrollBarHorizontal = (event) => {
    const scrollStep = 100;
    const section = document.querySelector("section.wrapper");
    if (event.deltaY < 0) {
        section!.scrollLeft += scrollStep;
    }else if(event.deltaY > 0){
        section!.scrollLeft -= scrollStep;
    }
  }

  return (
    <main>
      <section className="my-5 mx-4">
        <div className="w-[70%] my-8">
          <h2 className="text-3xl font-semibold">Transforme os seus sonhos em realidade com a programação</h2>
        </div>
        <CheckListItem>Se destaque no mercado de trabalho com o módulo de Linkedin e curriculo</CheckListItem>
        <CheckListItem>Seja um programador acima da média, com as técnicas e arquitetura de software que será ensinado</CheckListItem>
        <CheckListItem>Aprenda as tecnologias mais atuais requisitadas no mercado de tecnologia</CheckListItem>
        <CheckListItem>Aprenda soft-skills e se detaque em entrevistas, e se torne um funcionário indispensável</CheckListItem>
        <div className="flex justify-center my-4">
          <a href="/signIn" className="w-full"><button className="bg-aqua rounded-md w-full text-purple text-lg font-semibold py-3 px-3 hover:bg-purple hover:text-aqua">Começar agora</button></a>
        </div>
      </section>
      <section onWheel={scrollBarHorizontal} className="wrapper mx-4 whitespace-nowrap flex overflow-x-scroll scroll cursor-pointer">
      </section>
    </main>
  )
}
