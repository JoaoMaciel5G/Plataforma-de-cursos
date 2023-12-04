import { LogIn, UserCircle } from "lucide-react";
import CloseSideBar from "./clientComponents/CloseSideBar";
import Link from "next/link";


export default function SideBar(){
    return(
        <div id="sidebar" className="bg-violet-650 py-6 transition-[width] ease-in-out duration-300 fixed right-0 top-0 h-screen z-10 w-0 overflow-x-hidden">
                <CloseSideBar/>
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
    )
}