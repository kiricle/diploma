import { NextRequest, NextResponse } from 'next/server';
import { EnumTokens } from './services/tokens.service';

export async function middleware(request: NextRequest, response: NextResponse) {
    const { url, cookies } = request;

    const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

    const isAuthPage = url.includes('/login') || url.includes('/register');

    if (isAuthPage && refreshToken) {
        return NextResponse.redirect(new URL('/c', url));
    }

    if (isAuthPage) {
        return NextResponse.next();
    }

    if (!refreshToken) {
        return NextResponse.redirect(new URL('/login', url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/c/:path*', '/auth/:path*'],
};
