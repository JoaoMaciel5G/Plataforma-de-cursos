"use client"

import { ChevronRight } from "lucide-react";

export default function ChevronRightItem(){
    
    const clickArrowRight = () =>{
        const wrapper = document.querySelector("div.wrapper")
        wrapper!.scrollLeft = wrapper!.scrollLeft + 320
    }

    return(
        <div className="absolute top-1/2 -translate-y-[50%] rounded-full text-aqua  bg-purple right-0">
            <ChevronRight size={35} className="self-center cursor-pointer" onClick={clickArrowRight}/>
        </div>
    )
}