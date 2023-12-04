import { NextRequest, NextResponse } from "next/server";
import stripe from "@/app/lib/stripe";
import { validateCartItems } from "use-shopping-cart/utilities";
import Stripe from "stripe";

export async function POST(request: NextRequest){

    const cartDetails = await request.json()
    const baseUrl = request.headers.get("origin")

    const stripeInventory = await stripe.products.list({
        expand: ["data.default_price"]
    })

    const products = stripeInventory.data.map((prod)=>{
        return {
            id: prod.id,
            name: prod.name,
            price: (prod.default_price as Stripe.Price)?.unit_amount ?? 0,
            currency: "BRL",
            image: prod.images[0]
        }
    })

    const line_items = validateCartItems(products, cartDetails)

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items,
        success_url: `${baseUrl}/success/{CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/cart`
    })

    return NextResponse.json(session, {status: 200})
}