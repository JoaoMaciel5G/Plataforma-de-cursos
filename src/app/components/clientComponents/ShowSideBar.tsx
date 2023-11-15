"use client"

import { AlignJustify } from "lucide-react";

export default function ShowSideBar(){
    const stateSideBar = false

    const showSideBar = () =>{
        const sideBar = document.getElementById("sidebar")
        if(!stateSideBar){
            sideBar!.style.width = "224px"
            return
        }
    }

    return(
        <div className="flex items-center min-[900px]:hidden">
            <AlignJustify onClick={showSideBar} size={40} id="menu" className="text-white cursor-pointer hover:text-aqua"/>
            <p className="text-white m-1">Menu</p>
        </div>
    )
}