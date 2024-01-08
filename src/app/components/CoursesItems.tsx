import { Suspense } from "react";
import Loading from "./Loading";
import ChevronLeftItem from "./clientComponents/ChevronLeftItem";
import ChevronRightItem from "./clientComponents/ChevronRightItem";
import { Data } from "../types";

export default async function CoursesItems() {
    const url = process.env.URL_API

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
                                <img key={item.id} className="bg-violet-500 max-md:w-[30%] md:w-[20%] lg:w-[10%] rounded-lg p-3" src={item.images} alt="Imagem Cursos"/>
                            ))
                        }
                    </div>
                    <ChevronRightItem/>
                </div>
                <div className="grid grid-cols-3  my-2 gap-5  px-2 1xl:flex 1xl:justify-between">
                    {
                        courses.map((item: Data)=>(
                            <h2 key={item.id} className="font-bold whitespace-nowrap">{item.name}</h2>
                        ))
                    }
                </div>
            </Suspense>
        </section>
    )
}