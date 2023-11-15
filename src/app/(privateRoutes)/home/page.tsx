import {cookies} from "next/headers"
import Home from "./serverComponent"

type Cookies ={
    name: string,
    value: string
}

export default function ServerComponent(){
    const cookie: Cookies = cookies().get("token")
    const hasCookie = cookies().has("token")
    const secretKey = process.env.SECRET_KEY

    async function deleteTokens() {
        "use server";
    
        cookies().delete("token");
    }

    return (
        <Home cookies={cookie} hasCookie={hasCookie} deleteCookie={deleteTokens} secret={secretKey}/>
    )
}