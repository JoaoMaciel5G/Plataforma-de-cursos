import {Check} from "lucide-react"

export function CheckListItem({children}: {children: React.ReactNode}){
    return(
      <div className="flex items-center my-2">
        <div className="rounded-full px-1 mr-2 py-1 bg-purple flex items-center justify-center">
              <Check color="#26cd23" size={20}/>
        </div>
        <p className="font-medium">{children}</p>
      </div>
    )
}