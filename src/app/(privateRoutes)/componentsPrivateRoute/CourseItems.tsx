import Loading from "@/app/components/Loading";
import { Data } from "@/app/types";
import Link from "next/link";
import { Suspense } from "react";

export default async function CourseItems(){
    const url = process.env.URL_API

    const response = await fetch(`${url}/getCourses`)
    const courses = await response.json()

    return(
        <Suspense fallback={<Loading/>}>
                <div className="flex gap-4 mb-8 max-[1310px]:flex-col">
                    {
                        courses && courses.map((item: Data)=>{
                            const priceInCents = Math.round(parseFloat(item.price) * 100)
                            const formattedPrice = (priceInCents / 100).toFixed(2)
                            const priceInReal = formattedPrice.replace(".", ",")
                            
                            return(
                                <div key={item.id} className="flex flex-col justify-center items-center">
                                    <div>
                                        <Link href={`/courses/${item.id}`} className="flex justify-center items-center">
                                            <img className="bg-violet-500 rounded-sm p-3 w-full max-[1000px]:w-5/6" src={item.images} alt="Imagem Cursos"/>
                                        </Link>
                                    </div>
                                    <Link href={`/courses/${item.id}`}>
                                        <h2 className="font-semibold my-2 h-4">{item.name}</h2>
                                    </Link>
                                    <div className="flex items-center mt-10 mb-5">
                                        <p className="font-semibold text-lg mr-[5px]">R$ {priceInReal}</p>
                                        <p className="line-through text-lg text-zinc-500">R$ 39,90</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </Suspense>
    )
}