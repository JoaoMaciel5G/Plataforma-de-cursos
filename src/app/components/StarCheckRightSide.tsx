import { Star } from "lucide-react";

export default function StarCheckList({children}: {children: string}){
    return(
        <div className="flex my-4">
            <Star className="text-yellow-500 mx-2"/>
            <p className="text-white">{children}</p>
        </div>
    )
}