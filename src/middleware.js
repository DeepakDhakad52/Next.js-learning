import { NextResponse } from "next/server"

const Middleware = (req) => {
    // if(req.nextUrl.pathname !== '/contact') {
        return NextResponse.redirect(new URL('/contact', req.url))
    // }
}

export const config = {
    matcher:'/about/:path*'
}

export default Middleware
