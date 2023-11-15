import { Check } from "lucide-react";

export default function ItemCheckRightSide({children}:{children: string}){
    return(
        <div className="flex my-4">
            <Check className="text-purple mx-2"/>
            <p className="text-white">{children}</p>
        </div>
    )
}