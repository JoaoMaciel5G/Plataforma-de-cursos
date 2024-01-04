"use server"

export async function changePasswordRequest(password: string, id: string) {
    const url = process.env.URL

    const response = await fetch(`${url}/updatePassword`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
        },
        
        body: JSON.stringify({
            password,
            id
        })
    })

    const data = await response.json()

    return data
}