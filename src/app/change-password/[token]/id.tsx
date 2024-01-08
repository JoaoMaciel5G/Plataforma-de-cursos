"use server"

export async function getIdUser(token: string) {
    const url = process.env.URL_API

    const response = await fetch(`${url}/verifyExpToken`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

    const data = await response.json()

    return data
}