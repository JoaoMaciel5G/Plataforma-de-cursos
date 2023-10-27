import Link from "next/link"
import Image  from "next/image";
import imageLogo from "@/assets/logo.png"
import { AlignJustify } from "lucide-react";

function Header() {
    return ( 
        <header className="flex justify-between items-center pl-3 pr-3 bg-purple">
            <div>
                <Link href="/"><Image src={imageLogo} alt="Logo Pro Tech" width={250} height={40}/></Link>
            </div>
            <div>
                <AlignJustify size={40} className="text-white cursor-pointer hover:text-aqua"/>
            </div>
        </header>
    );
}

export default Header;