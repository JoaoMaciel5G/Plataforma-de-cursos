import { Suspense } from "react";
import Loading from "./Loading";
import ChevronLeftItem from "./clientComponents/ChevronLeftItem";
import ChevronRightItem from "./clientComponents/ChevronRightItem";

interface Data{
    id?: string
    images: string,
    name: string,
    description: string
}

export default async function CoursesItems() {
    const url = process.env.NEXT_PUBLIC_URL

    const response = await fetch(`${url}/getCourses`)
    const courses = await response.json()

    return(
        <section className="bg-white my-10 py-20 rounded-md">
            <div className="text-center">
                <h2 className="font-bold text-2xl my-4 uppercase">Os melhores cursos você encontra aqui</h2>
            </div>
            <Suspense fallback={<Loading/>}>
                <div className="relative flex px-2">
                    <ChevronLeftItem/>
                    <div className="wrapper flex select-none gap-6 overflow-x-scroll scroll-smooth cursor-pointer">
                        {
                            courses.map((item: Data)=>(
                                <img key={parseInt(item.id!)} className="itemCourse max-md:w-[30%] md:w-[15%] rounded-lg p-3" src={item.images} alt="Imagem Cursos"/>
                            ))
                        }
                    </div>
                    <ChevronRightItem/>
                </div>
                <div className="grid grid-cols-3 gap-5 my-2 px-2 md:flex md:justify-between">
                    {
                        courses.map((item: Data)=>(
                            <h2 key={parseInt(item.id!)} className="font-bold whitespace-nowrap">{item.name}</h2>
                        ))
                    }
                </div>
            </Suspense>
        </section>
    )
}