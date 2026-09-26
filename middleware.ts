import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /partner routes (including /partner, /dashboard/partner, etc.)
  if (pathname.startsWith('/partner') || pathname.startsWith('/dashboard/partner')) {
    // Exclude public auth routes like /partner/login or /partner/register
    if (
      pathname.includes('/login') ||
      pathname.includes('/register') ||
      pathname.includes('/forgot-password')
    ) {
      return NextResponse.next();
    }

    const token =
      request.cookies.get('sb-access-token')?.value ||
      request.cookies.get('supabase-auth-token')?.value ||
      request.headers.get('authorization');

    if (!token) {
      const loginUrl = new URL('/partner/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/partner/:path*', '/dashboard/partner/:path*'],
};
