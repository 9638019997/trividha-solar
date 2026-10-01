import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Dashboard routes require authentication
  if (path.startsWith('/dashboard')) {
    const authCookie = request.cookies.get('sb-access-token') || request.cookies.get('supabase-auth-token');
    
    // In production with live Supabase session, verify cookie exists
    // If not authenticated, redirect to partner or customer login
    if (!authCookie && process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const loginUrl = path.includes('/customer') ? '/dashboard/customer/login' : '/partner/login';
      return NextResponse.redirect(new URL(loginUrl, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};
