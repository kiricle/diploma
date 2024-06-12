import { NextRequest, NextResponse } from 'next/server';
import { EnumTokens } from './services/tokens.service';

export async function middleware(request: NextRequest, response: NextResponse) {
    const { url, cookies } = request;

    const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value;

    const isAuthPage = url.includes('/login') || url.includes('/register');

    const isHomePage = url === 'http://localhost:3000/';

    if ((isAuthPage || isHomePage) && accessToken) {
        return NextResponse.redirect(new URL('/c', url));
    }

    if (isAuthPage) {
        return NextResponse.next();
    }

    if (!accessToken) {
        return NextResponse.redirect(new URL('/login', url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/c/:path*', '/login', '/register', '/'],
};
