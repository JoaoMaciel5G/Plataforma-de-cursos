import { PlainSignatures } from "@/app/types"
import Link from "next/link"
import FiveMonthPlain from "../componentsPrivateRoute/FiveMonthPlain"
import OneMonthPlain from "../componentsPrivateRoute/OneMonthPlain"
import OneYearPlain from "../componentsPrivateRoute/OneYearPlain"

export default async function Plains(){
    const url = process.env.URL

    const response = await fetch(`${url}/getPlains`)
    const data = await response.json()

    return(
        <main className="flex justify-center items-center flex-col w-full">
            <div className="flex justify-center items-center pt-8">
                <h2 className="text-4xl font-medium">Planos de assinatura</h2>
            </div>
            <div className="flex justify-around my-8 max-md:flex-col max-md:justify-center max-md:items-center max-md:w-full px-5">
                {
                    data.map((plain: PlainSignatures)=>{
                        const price = parseInt(plain.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        const valueDiscount = parseInt(plain.totalValue).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

                        return(
                            <div key={plain.plain_id} className="flex flex-col px-4 my-6 mx-6 justify-center items-center max-md:w-full border-[1px] border-purple w-[25%]">
                                <h2 className="text-4xl font-medium my-5 text-center">{plain.plain_name}</h2>
                                <div className="flex flex-col">
                                    <p className="line-through text-2xl text-slate-400">{price}</p>
                                    <p className="text-2xl mb-5">Por apenas {valueDiscount}</p>
                                    <div>
                                        {
                                            (() => {
                                                if(plain.plain_name == "5 Meses"){
                                                    return (
                                                        <FiveMonthPlain/>
                                                    )
                                                }else if(plain.plain_name == "1 Mês"){
                                                    return (
                                                        <OneMonthPlain/>
                                                    )
                                                }else if(plain.plain_name == "1 Ano") {
                                                    return (
                                                        <OneYearPlain/>
                                                    )
                                                }
                                            })()  
                                        }
                                    </div>
                                </div>
                                <Link href="#" className="text-lg bg-purple text-white p-2 rounded-lg hover:bg-violet-650 my-5">Obter Plano</Link>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}