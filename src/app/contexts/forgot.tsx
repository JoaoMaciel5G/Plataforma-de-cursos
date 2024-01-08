"use server"

export async function forgotRequest(email: string, uri: string) {
    const url = process.env.URL_API
    
    const response = await fetch(`${url}/sendMail`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "url": uri
        },
        body: JSON.stringify({
            email,
        })
    })

    const data = await response.json()

    return data
}