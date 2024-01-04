import Link from "next/link"
import Image  from "next/image";
import imageLogo from "@/assets/logo.png"
import { LayoutGrid, Mail, ShoppingCart, UserCircle, Home } from "lucide-react";
import ShowSideBar from "@/app/components/clientComponents/ShowSideBar";
import SideBar from "./SideBar";

export default function Header() {
    return ( 
        <header className="flex justify-around items-center  h-28 bg-purple">
            <div>
                <Link href="/"><Image src={imageLogo} alt="Logo Pro Tech" width={250} height={40}/></Link>
            </div>
            <div className="max-[900px]:hidden gap-5 flex">
                <div className="group flex items-center text-white">
                    <LayoutGrid className="group-hover:text-aqua"/>
                    <Link href="/plains" className="px-2 text-xl group-hover:text-aqua">Planos de assinatura</Link>
                </div>
                <div className="group flex items-center  text-white">
                    <ShoppingCart className="group-hover:text-aqua"/>
                    <Link href="/cart" className="px-2 text-xl group-hover:text-aqua">Carrinho</Link>
                </div>
                <div className="group flex items-center  text-white">
                    <Mail className="group-hover:text-aqua"/>
                    <Link href="/contact" className="px-2 text-xl group-hover:text-aqua">Contato</Link>
                </div>
                <div className="group flex items-center  text-white">
                    <Home className="group-hover:text-aqua"/>
                    <Link href="/home" className="px-2 text-xl group-hover:text-aqua">Home</Link>
                </div>
            </div>
            <SideBar/>
            <div className="flex gap-5">
                <ShowSideBar/>
                <UserCircle size={40} className="text-white cursor-pointer"/>
            </div>
        </header>
    );
}

