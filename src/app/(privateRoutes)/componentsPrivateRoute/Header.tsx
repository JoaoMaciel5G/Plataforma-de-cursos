import Link from "next/link"
import Image  from "next/image";
import imageLogo from "@/assets/logo.png"
import { LayoutGrid, Mail, ShoppingCart, UserCircle } from "lucide-react";
import ShowSideBar from "@/app/components/clientComponents/ShowSideBar";
import SideBar from "./SideBar";

export default function Header() {
    return ( 
        <header className="flex justify-between items-center px-4 h-28 bg-purple">
            <div>
                <Link href="/"><Image src={imageLogo} alt="Logo Pro Tech" width={250} height={40}/></Link>
            </div>
            <div className="max-[900px]:hidden gap-5 flex">
                <div className="group flex items-center text-white">
                    <LayoutGrid className="group-hover:text-aqua"/>
                    <Link href="/exploreCourses" className="px-2 text-xl group-hover:text-aqua">Explorar Cursos</Link>
                </div>
                <div className="group flex items-center  text-white">
                    <ShoppingCart className="group-hover:text-aqua"/>
                    <Link href="/cart" className="px-2 text-xl group-hover:text-aqua">Carrinho</Link>
                </div>
                <div className="group flex items-center  text-white">
                    <Mail className="group-hover:text-aqua"/>
                    <Link href="/contact" className="px-2 text-xl group-hover:text-aqua">Contato</Link>
                </div>
            </div>
            <SideBar/>
            <div className="flex gap-5">
                <ShowSideBar/>
                <UserCircle size={40} className="text-white"/>
            </div>
        </header>
    );
}

