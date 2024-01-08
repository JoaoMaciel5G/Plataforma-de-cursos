import ChangePasswordClient from "./clientComponent";

export default async function ChangePassword({params}: {params: {token: string}}) {
  const token = params.token
  const url = process.env.URL_API

  const res = await fetch(`${url}/verifyExpToken`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  
  const data = await res.json()

  if(data.error){
    return(
      <div className="bg-purple h-full flex items-center justify-center">
        <h2 className="text-3xl text-white font-semibold">Parece que você não tem acesso a isso</h2>
      </div>
    )
  }

  return (
    <ChangePasswordClient token={token}/>
  )
}