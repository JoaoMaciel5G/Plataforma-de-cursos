import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token")?.value!
  const url = process.env.URL_API
  const res = NextResponse.next()

  const response = await fetch(`${url}/verifyExpToken`, {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${cookie}`
      }
  })

  const data = await response.json()

  switch (request.nextUrl.pathname) {
    case '/':
    case '/login':
    case '/signIn':
      if (response.status === 200) {
        return NextResponse.redirect(new URL('/home', request.url));
      } else if (data.error) {
        res.cookies.delete('token');
        return res;
      }
      break;
  }

  if(request.cookies.has("token")){
    if(data.error){
      res.cookies.delete("token")
      return res
    }
  }

  if(!request.cookies.has("token")){
    return NextResponse.redirect(new URL("/login", request.url))
  }
  
  return res
}

export const config = {
  matcher : [
    "/login",
    "/signIn",
    "/",
    "/home",
    "/cart",
    "/contact",
    "/courses/:path?",
    "/exploreCourses",
    "/plains",
    "/success/:path?",
  ]
}