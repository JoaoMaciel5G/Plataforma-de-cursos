import { Send } from "lucide-react";

export default function Footer(){
    return(
      <footer className="py-6 px-2 flex justify-around">
        <div className="px-4 lg:w-1/2">
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
        <div className="max-lg:hidden">
          <h2 className="font-semibold text-lg pb-3">Cursos Online</h2>
          <p className="text-zinc-500">Arquitetura de Software</p>
          <p className="text-zinc-500">Design Patterns</p>
          <p className="text-zinc-500">Inglês</p>
          <p className="text-zinc-500">Linkedin</p>
          <p className="text-zinc-500">Soft Skills</p>
        </div>
        <div className="max-lg:hidden">
          <h2 className="font-semibold text-lg pb-3">Categorias</h2>
          <p className="text-zinc-500">Competencias pessoais</p>
          <p className="text-zinc-500">Produtividade</p>
          <p className="text-zinc-500">Gestão e trabalho em equipe</p>
          <p className="text-zinc-500">Liderança positiva</p>
        </div>
      </footer>
    )
}