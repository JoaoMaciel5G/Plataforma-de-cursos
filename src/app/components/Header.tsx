import Link from "next/link"
import Image  from "next/image";
import imageLogo from "@/assets/logo.png"
import { LogIn, UserCircle } from "lucide-react";
import ShowSideBar from "./clientComponents/ShowSideBar";
import CloseSideBar from "./clientComponents/CloseSideBar";

function Header() {
    return ( 
        <header className="flex justify-between items-center px-4 h-28 bg-purple">
            <div>
                <Link href="/"><Image src={imageLogo} alt="Logo Pro Tech" width={250} height={40}/></Link>
            </div>
            <ShowSideBar/>
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
        </header>
    );
}

export default Header;