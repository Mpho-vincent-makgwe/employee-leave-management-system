import { NextResponse } from 'next/server';

const publicRoutes = ['/auth/log-in', '/auth/register', '/auth/forgot-password'];
const protectedRoutes = ['/', '/request-leave', '/my-leaves', '/holidays', '/policies', '/notifications', '/profile'];

export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('auth-token')?.value;

  // If user is logged in and tries to access auth pages
  if (token && publicRoutes.includes(path)) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // If user is not logged in and tries to access protected pages
  if (!token && protectedRoutes.includes(path)) {
    const loginUrl = new URL('/auth/log-in', request.nextUrl);
    loginUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};