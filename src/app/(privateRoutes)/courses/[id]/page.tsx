import { Data } from "@/app/types";
import CourseDetailsPageClient from "./clientComponent";

const url = process.env.URL_API
export async function generateStaticParams() {
    const response = await fetch(`${url}/getCourses`);
    const paths = await response.json();
  
    return paths.map((courses: Data) => ({
      id: courses.id
    }));
}

async function getData(id: string) {
    const request = await fetch(`${url}/getCourses/${id}`);
    const response = await request.json(); 
    return response
}

export default async function CoursesPageDetails({ params }: { params: { id: string } }){
    const {id} = params

    const response = await getData(id)
    const item: Data = response[0]

    const priceInCents = Math.round(parseFloat(item?.price) * 100);

    return(
        <CourseDetailsPageClient item={item} formattedPriceValue={priceInCents}/>
    )
}