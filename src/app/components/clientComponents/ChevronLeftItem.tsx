"use client"

import { ChevronLeft } from "lucide-react";

export default function ChevronLeftItem(){
    
    const clickArrowLeft = () =>{
        const wrapper = document.querySelector("div.wrapper")
        wrapper!.scrollLeft = wrapper!.scrollLeft - 320
    }
    return(
    <div className="absolute top-1/2 left-0 -translate-y-[50%] text-aqua rounded-full bg-purple">
        <ChevronLeft size={35} className="self-center cursor-pointer" onClick={clickArrowLeft}/>
    </div> 
    )
}