import { Star } from "lucide-react"

export default function StarQuality(){
    return(
        <div className="flex mb-4">
            <h2 className="text-xl font-semibold mr-3">5,0</h2>
            <Star className="text-yellow-500"/>
            <Star className="text-yellow-500"/>
            <Star className="text-yellow-500"/>
            <Star className="text-yellow-500"/>
            <Star className="text-yellow-500"/>
        </div>
    )
}