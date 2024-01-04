import CloseSideBar from "@/app/components/clientComponents/CloseSideBar";
import { LayoutGrid, Mail, ShoppingCart, Home } from "lucide-react";
import Link from "next/link"

export default function SideBar(){
    return(
        <div id="sidebar" className="bg-violet-650 py-6 transition-[width] ease-in-out duration-300 fixed right-0 top-0 h-screen z-10 w-0 overflow-x-hidden">
                <CloseSideBar/>
                <div className="flex flex-col gap-y-6 py-5 px-2 border-y-2 border-purple">
                <div className="group flex items-center  text-white">
                        <Home className="group-hover:text-aqua"/>
                        <Link href="/home" className="px-2 text-xl group-hover:text-aqua">Home</Link>
                    </div>
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
                </div>
        </div>
    )
}