import Loading from "@/app/components/Loading";
import { Suspense } from "react";

interface Data {
    id: string
    images: string,
    name: string,
    description: string,
    price: string
}

export default async function CourseItems(){
    const url = process.env.URL

    const response = await fetch(`${url}/getCourses`)
    const courses = await response.json()

    return(
        <Suspense fallback={<Loading/>}>
                <div className="flex gap-4 mb-8">
                    {
                        courses.map((item: Data)=>{
                            const formattedPrice = item.price.replace(".", ",")

                            return(
                                <div key={item.id}>
                                    <div>
                                        <img className="bg-violet-500 rounded-sm p-3 w-full" src={item.images} alt="Imagem Cursos"/>
                                    </div>
                                    <h2 className="font-semibold my-2 h-4">{item.name}</h2>
                                    <div className="flex items-center gap-2 mt-10 mb-5">
                                        <p className="font-semibold text-lg">R$ {formattedPrice}0</p>
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