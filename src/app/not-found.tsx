import Image from "next/image"
import gifNotFound from "@/assets/questions.gif"

export default function NotFound(){
    return (
        <section className="bg-white h-full flex items-center justify-center flex-col">
            <Image src={gifNotFound} alt="Página não encontrada 404"/>
            <h2 className="text-3xl  font-semibold">Tá tudo muito vazio por aqui... Pagina não encontrada</h2>
        </section>
    )
}