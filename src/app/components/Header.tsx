import Link from "next/link"
import Image  from "next/image";
import imageLogo from "@/assets/logo.png"
import { LogIn, UserCircle } from "lucide-react";
import ShowSideBar from "./clientComponents/ShowSideBar";
import SideBar from "./SideBar";

export default function Header() {
    return ( 
        <header className="flex justify-between items-center px-4 h-28 bg-purple">
            <div>
                <Link href="/"><Image src={imageLogo} alt="Logo Pro Tech" width={250} height={40}/></Link>
            </div>
            <ShowSideBar/>
            <div className="max-md:hidden flex gap-5">
                <div className="group flex items-center text-white">
                    <LogIn className="group-hover:text-aqua"/>
                    <Link href="/signIn" className="px-2 text-xl group-hover:text-aqua">Sign In</Link>
                </div>
                <div className="group flex items-center text-white">
                    <UserCircle className="group-hover:text-aqua"/>
                    <Link href="/login" className="px-2 text-xl group-hover:text-aqua">Login</Link>
                </div>
            </div>
            <SideBar/>
        </header>
    );
}