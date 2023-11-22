import Stripe from "stripe"

const stripe = new Stripe(process.env.SECRET_KEY_STRIPE!, {
    apiVersion: "2023-10-16"
})

export default stripe