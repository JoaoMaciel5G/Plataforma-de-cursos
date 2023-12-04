import { deleteCookie } from 'cookies-next';
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get("token")?.value!
  const url = process.env.URL
  const res = NextResponse.next();

  const response = await fetch(`${url}/verifyExpToken`, {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${cookie}`
      }
  })
  const data = await response.json()

  if(response.status == 403){
    deleteCookie("token", {res, req})
    res.headers.set("location", `${req.nextUrl.origin}/login`)
    console.log(req.nextUrl.origin)
    console.log(req.nextUrl)
    return res
  }else if(data.error){
    deleteCookie("token", {res, req})
    res.headers.set("location", `${req.nextUrl.origin}/signIn`)
    return res
  }
}
export const config = {
  matcher: ["/home", "/cart", "/contact", "/exploreCourses", "/plains"]
}