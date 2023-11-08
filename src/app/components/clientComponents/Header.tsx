"use client"

import Link from "next/link"
import { useState } from "react";
import Image  from "next/image";
import imageLogo from "@/assets/logo.png"
import { AlignJustify, LogIn, UserCircle, X } from "lucide-react";

function Header() {
    const [stateSideBar, setStateSideBar] = useState(false)

    const showSideBar = () =>{
        const sideBar = document.getElementById("sidebar")
        if(!stateSideBar){
            sideBar!.style.width = "224px"
            setStateSideBar(!stateSideBar)
            return
        }
    }

    const closeSideBar = () => {
        const sideBar = document.getElementById("sidebar")
        if(stateSideBar){
            sideBar!.style.width = "0px"
            setStateSideBar(!stateSideBar)
            return
        }
    }

    return ( 
        <header className="flex justify-between items-center px-4 h-28 bg-purple">
            <div>
                <Link href="/"><Image src={imageLogo} alt="Logo Pro Tech" width={250} height={40}/></Link>
            </div>
            <div className="flex items-center md:hidden">
                <AlignJustify onClick={showSideBar} size={40} id="menu" className="text-white cursor-pointer hover:text-aqua"/>
                <p className="text-white m-1">Menu</p>
            </div>
            <div className="max-md:hidden flex">
                <div className="group flex items-center pr-3 text-white">
                    <LogIn className="group-hover:text-aqua"/>
                    <Link href="/signIn" className="py-1 px-2 text-xl group-hover:text-aqua">Sign In</Link>
                </div>
                <div className="group flex items-center pl-3 text-white">
                    <UserCircle className="group-hover:text-aqua"/>
                    <Link href="/login" className="py-1 px-2 text-xl group-hover:text-aqua">Login</Link>
                </div>
            </div>
            <div id="sidebar" className="bg-violet-650 py-6 transition-[width] ease-in-out duration-300 fixed right-0 top-0 h-screen z-10 w-0 overflow-x-hidden">
                <div className="flex justify-end pb-4 pr-4">
                        <X size={30} onClick={closeSideBar} className="cursor-pointer text-white hover:text-aqua"/>  
                </div>
                <div className="flex flex-col py-5 px-2 border-y-2 border-purple">
                    <div className="flex items-center group">
                            <LogIn className="group-hover:text-white"/>
                            <Link href="/signIn" className="py-1 group-hover:text-white px-4 text-xl">Sign In</Link>
                    </div>
                    <div className="flex items-center group">
                            <UserCircle className="group-hover:text-white"/>
                            <Link href="/login" className="py-1 px-4 text-xl group-hover:text-white">Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;