export interface Data {
    id: string
    images: string,
    name: string,
    description: string,
    price: string
}
export interface StripeData {
    id: string,
    description: string,
    name: string,
    images: [],
    default_price_data : {
        unit_amount_decimal: string,
        currency: string
    }
}