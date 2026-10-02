import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect all dashboard routes
  if (path.startsWith('/dashboard')) {
    const cookies = request.cookies.getAll();
    
    // Check modern chunked/project-scoped Supabase SSR auth cookies
    const hasSsrToken = cookies.some(
      (c) => c.name.startsWith('sb-') && c.name.includes('-auth-token')
    );

    // Fallback check for legacy cookie keys
    const hasLegacyToken = Boolean(
      request.cookies.get('sb-access-token')?.value ||
      request.cookies.get('supabase-auth-token')?.value
    );

    if (!hasSsrToken && !hasLegacyToken) {
      const redirectUrl = new URL('/auth/login', request.url);
      redirectUrl.searchParams.set('redirectTo', path);
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
