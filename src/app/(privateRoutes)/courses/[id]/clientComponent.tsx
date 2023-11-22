"use client"

import { Data } from "@/app/types"
import StarQuality from "../../componentsPrivateRoute/StarQuality"
import { Trophy, MonitorSmartphone, GanttChartSquare, Clock10 } from "lucide-react"
import Link from "next/link"
import {useShoppingCart} from "use-shopping-cart"

export default function CourseDetailsPageClient({item, formattedPriceValue}: {item: Data, formattedPriceValue: number}){

    const {addItem} = useShoppingCart()
    const formattedPrice = (formattedPriceValue / 100).toFixed(2)
    const priceInReal = formattedPrice.replace(".", ",")

    function addToCart () {
        addItem({
            name: item.name,
            description: item.description,
            id: item.id,
            price: formattedPriceValue,
            currency: "BRL",
            image: item.images
        })
    }

    return(
        <section className="flex justify-center">
            <div className="w-2/5 mt-20">
                <h2 className="font-semibold text-4xl my-4">
                    {item?.name}
                </h2>
                <p className="text-lg my-4">
                    {item?.description}
                </p>
                <StarQuality/>
                <div>
                    <h2 className="text-2xl font-semibold my-2">Este curso possui:</h2>
                    <div className="flex my-3">
                        <Trophy className="mr-5"/>
                        <p>Certificado de conclusão</p>
                    </div>
                    <div className="flex my-3">
                        <MonitorSmartphone className="mr-5"/>
                        <p>Acesso no dispositivo móvel e na TV</p>
                    </div>
                    <div className="flex my-3">
                        <GanttChartSquare className="mr-5"/>
                        <p>Mais de 10 projetos práticos para treinar e praticar oque foi ensinado</p>
                    </div>
                </div>
                <div className="border-t-[1px] border-zinc-500 py-8 mt-8">
                    <Link href="/plains" className="bg-purple text-white text-lg p-2 rounded-lg hover:bg-violet-650">Experimente nossos Planos</Link>
                </div>
            </div>
            <div className="mt-20 ml-12">
                <div className="bg-violet-500 rounded-lg">
                    <img src={item?.images} alt="Imagem curso" />
                </div>
                <div>
                    <div className="flex my-3 items-center justify-between">
                        <h2 className="font-semibold text-2xl">R$ {priceInReal}</h2>
                        <p className="line-through text-lg text-zinc-500">R$ 39,90</p>  
                    </div>
                    <p className="text-lg">R$ 10 de desconto</p>
                    <div className="flex">
                        <Clock10 className="text-red-600 mr-2"/>
                        <p className="text-red-600"><span className="font-semibold">Só mais 5 dias</span> por esse preço</p>
                    </div>
                </div>
                <button onClick={addToCart} className="block bg-purple my-4 text-white text-lg p-2 rounded-lg hover:bg-violet-650">Adicionar ao carrinho</button>
                <button className="bg-purple text-white text-lg p-2 rounded-lg hover:bg-violet-650">Comprar esse curso</button>
                <div>
                    <p className="my-3 text-lg">Garantia de devolução do dinheiro em 7 dias</p>
                </div>
            </div>
        </section>
    )
}