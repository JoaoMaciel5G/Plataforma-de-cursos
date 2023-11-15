"use client"

import { X } from "lucide-react";

export default function CloseSideBar(){
    const stateSideBar = true

    const closeSideBar = () => {
        const sideBar = document.getElementById("sidebar")
        if(stateSideBar){
            sideBar!.style.width = "0px"
            return
        }
    }

    return(
        <div className="flex justify-end pb-4 pr-4">
            <X size={30} onClick={closeSideBar} className="cursor-pointer text-white hover:text-aqua"/>  
        </div>
    )
}