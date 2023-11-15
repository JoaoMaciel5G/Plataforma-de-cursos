import Image from "next/image"
import gifNotFound from "@/assets/Questions.gif"
import Link from "next/link"

export default function NotFound(){
    return (
        <section className="bg-white h-full flex items-center justify-center flex-col">
            <Image src={gifNotFound} alt="Página não encontrada 404"/>
            <h2 className="text-3xl  font-semibold">Tá tudo muito vazio por aqui... Pagina não encontrada</h2>
            <Link href="/" className="text-lg my-3 p-4 bg-purple text-aqua rounded-lg hover:bg-violet-650">Voltar Para Home</Link>
        </section>
    )
}