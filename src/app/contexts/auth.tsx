"use server"

import { CreateUserData } from "../types"

type UserData = {
    name: string,
    email: string,
    password: string
}

export async function signInRequest({email, name, password}: UserData) {
    const url = process.env.URL_API

    const response = await fetch(`${url}/create`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })

    const data: CreateUserData = await response.json()

    return data
}