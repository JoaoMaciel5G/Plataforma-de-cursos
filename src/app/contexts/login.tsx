"use server"

import { Login } from "../types"

export async function loginRequest({email, password}: Login) {

    const url = process.env.URL_API

    const response = await fetch(`${url}/login`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    const data = await response.json()

    return data
}