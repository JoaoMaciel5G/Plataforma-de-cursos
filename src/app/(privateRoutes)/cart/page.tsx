"use client"

import Image from "next/image"
import { useCart } from "react-use-cart";

function Cart() {
    const {
        isEmpty,
        items,
        totalUniqueItems,
        cartTotal,
        removeItem,
        emptyCart
    } = useCart()

    if(isEmpty) return <h2 className="text-3xl text-purple text-center mt-4">Seu carrinho está vazio</h2>

    return ( 
        <main className="flex">
            <section className="w-3/4 mt-28 ml-10">
                <div className="my-10">
                    <h2 className="text-3xl text-purple">Meu carrinho</h2>   
                </div>
                <div className="flex border-b-[1px] border-zinc-400 py-6 w-10/12">
                    {items.map((item)=>{
                        const formattedPrice = item.price.toString().replace(".", ",")

                        return(
                            <>
                                <div className="itemCourse p-3 w-40 rounded-lg mr-5">
                                    <Image width={150} height={150} src={item.images} alt="foto adonis" />
                                </div>
                                <div>
                                    <div>
                                    <h2 className="text-lg mb-2">{item.name}</h2>
                                    <p className="text-xl text-zinc-400 font-light mb-9">R$ {formattedPrice}</p>
                                </div>
                                    <button className="bg-violet-650 rounded-lg p-2 text-white" onClick={()=> removeItem(item.id)}>Remover do carrinho</button>
                                </div> 
                            </>
                        )})}
                </div>
            </section>
            <section className="w-1/4 mt-28 mx-10">
                <h2 className="border-b-[1px] border-zinc-400 text-3xl p-3 text-purple">Detalhes</h2>
                <div className="border-b-[1px] border-zinc-400 flex justify-between py-5">
                    <p className="text-lg">Subtotal</p>
                    <p className="text-lg">R$ {cartTotal}</p>
                </div>
                <div className="flex justify-between pt-5">
                    <p className="text-lg">Quantidade itens</p>
                    <p className="text-lg">{totalUniqueItems}</p>
                </div>
                <div className="py-7">
                    <div className="flex flex-col">
                        <label htmlFor="cupom" className="text-lg my-2">Tem cupom de desconto?</label>
                        <input type="text" placeholder="Cupom de desconto" className=" text-black py-4 px-3 outline-none rounded-md mb-7"/>
                        <button className="text-white bg-violet-650 rounded-lg p-2 text-lg hover:bg-violet-600">Verificar Cupom</button>
                    </div>
                    <div className="flex justify-between mt-28 mb-4">
                        <p>Total</p>
                        <p>R$ {cartTotal}</p>
                    </div>  
                    <button  onClick={()=> emptyCart()} className="text-white bg-violet-650 rounded-lg p-2 text-lg hover:bg-violet-600">Limpar Carrinho</button>
                </div>
            </section>
        </main>
     );
}

export default Cart;