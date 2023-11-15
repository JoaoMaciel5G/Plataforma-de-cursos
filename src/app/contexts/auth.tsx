"use server"

type UserData = {
    name: string,
    email: string,
    password: string
}

export async function signInRequest({name, email, password}: UserData) {
    const url = process.env.URL

    const response = await fetch(`${url}/create`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })

    const {token, userData} = await response.json()

    return {
        token,
        userData
    }
}