"use client"
import {Check, ChevronRight, ChevronLeft, Send} from "lucide-react"
import useSWR from "swr"
import Loading from "./components/Loading"

interface Data{
  images: string,
  name: string,
  description: string
}
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
  const url = process.env.NEXT_PUBLIC_URL

  const clickArrowLeft = () =>{
    const wrapper = document.querySelector("div.wrapper")
    wrapper!.scrollLeft = wrapper!.scrollLeft - 320
  }

  const clickArrowRight = () =>{
    const wrapper = document.querySelector("div.wrapper")
    wrapper!.scrollLeft = wrapper!.scrollLeft + 320
  }

  async function fetcher(url: string){
    const response = await fetch(`${url}/getCourses`)
    const courses = await response.json()
    return courses
  }

  const {data, error, isLoading} = useSWR(url, fetcher)

  return (
    <>
    <main className="mx-3">
    <section className="my-10">
        <div>
          <h2 className="font-semibold text-3xl my-4 text-center">Você está apenas começando uma nova etapa na sua vida como programador...</h2>
        </div>
        <div>
          <p className="text-lg mb-4">Na programação existe um mundo de possibilidades, ser Front-end, ser Back-end</p>
          <p className="text-lg mb-4">Sempre me perguntam a mesma coisa:<br/><span className="italic text-xl font-normal bg-aqua text-purple">"Como ganhar bem com tecnologia?"</span></p>
          <p className="text-lg">A resposta é muito mais simples do que você imagina:</p>
          <p className="text-xl font-extrabold text-violet-950 my-6">Você precisa evoluir em muito pouco tempo.</p>
          <p className="text-lg mb-4">O mercado de tecnologia é o que mais contrata pessoas hoje em dia, mas é o mercado que mais falta gente capacitada, curioso né?</p>
          <p className="text-lg">Por isso se você quer ser um programador de sucesso, e se <span>destacar</span> você precisa de um bom método de ensino, e um conteúdo de fácil entendimento, venha comigo que eu te garanto tudo isso e muito mais conteúdo, o que eu gastei anos e horas para aprender, você vai aprender em poucos meses, ou até menos.</p>
        </div>
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
      <section className="bg-white my-10 py-20 rounded-md">
        <div className="text-center">
          <h2 className="font-bold text-2xl my-4 uppercase">Os melhores cursos você encontra aqui</h2>
        </div>
        {
          isLoading ? <Loading/> : (
            <>
              <div className="relative flex px-2">
                <div className="absolute top-1/2 left-0 -translate-y-[50%] text-aqua rounded-full bg-purple">
                  <ChevronLeft size={35} className="self-center cursor-pointer" onClick={clickArrowLeft}/>
                </div>
                <div className="wrapper flex select-none gap-6 overflow-x-scroll scroll-smooth cursor-pointer">
                  {
                    data.map((item: Data)=>(
                        <img  className="itemCourse w-[30%] rounded-lg p-3" src={item.images} alt="Imagem Cursos"/>
                      )
                    )
                  }
                </div>
                <div className="absolute top-1/2 -translate-y-[50%] rounded-full text-aqua  bg-purple right-0">
                  <ChevronRight size={35} className="self-center cursor-pointer" onClick={clickArrowRight}/>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5 my-2 px-2">
                  {
                    data.map((item: Data)=>(
                      <h2 className="font-bold whitespace-nowrap">{item.name}</h2>
                    ))
                  }
              </div>
            </>
          )
        }
      </section>
    </main>
    <section className="bg-purple p-5 my-8">
    <div>
      <h2 className="text-5xl font-bold text-white pb-5">Suporte</h2>
    </div>
    <div>
      <h2 className="text-white text-lg pb-2 font-bold">Suporte <span className="bg-aqua p-1 text-purple ">24 horas</span></h2>
      <p className="text-aqua font-normal text-lg">Faça tambem parte da comunidade de alunos, de modo que você possa tirar suas duvidas e até mesmo compartilhar seus códigos com a comunidade, e compartilhar suas evoluções.</p>
    </div>
  </section>
  <section className="py-10 my-6 bg-white">
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
  </section>
  <footer className="py-6 px-2">
    <div>
      <label htmlFor="email" className="font-semibold text-lg">Fique por dentro</label>
      <div>
        <form className="flex my-2">
          <input type="email" id="email" placeholder="Email" className="py-3 outline-none px-4 w-full rounded-lg text-lg placeholder:font-semibold"/>
          <button type="submit"><Send size={55} className="bg-purple text-white cursor-pointer rounded-lg ml-2 p-3"/></button>
        </form>
      </div>
      <div className="flex items-center px-2">
        <div>
          <input type="checkbox" id="check"/>
        </div>
        <label htmlFor="check" className="font-semibold px-2">Quero receber emails e novidades de cursos e promoções novas e concordo com os termos de privacidade</label>
      </div>
    </div>
  </footer>
  </>
  )
}
