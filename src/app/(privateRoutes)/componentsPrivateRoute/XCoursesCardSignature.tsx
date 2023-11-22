import { X } from "lucide-react";
import { ReactNode } from "react";

export default function XCoursesCardSignature({ children } : { children: ReactNode }){
    return (
        <div className="flex">
            <X size={30} className="text-red-600"/>
            <p className="line-through text-red-500 text-lg mx-2">{children}</p>
        </div>
    )
}