import { Check } from "lucide-react";
import { ReactNode } from "react";

export default function CheckCoursesCardSignature({ children } : { children: ReactNode }){
    return (
        <div className="flex">
            <Check size={30} className="text-green-650"/>
            <p className="text-lg mx-2">{children}</p>
        </div>
    )
}