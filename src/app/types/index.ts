export interface Data {
    id: string
    images: string,
    name: string,
    description: string,
    price: string
}

export interface PlainSignatures {
    plain_id: string,
	plain_name: string,
	price: string,
	discount_price: string,
	totalValue: string
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

export interface Login {
    email: string,
    password: string
}

export interface UserData {
    confirm_password: string,
    email: string,
    name: string,
    password: string
}