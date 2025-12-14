import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  // Add CORS headers for fonts
  if (request.nextUrl.pathname.startsWith('/fonts/')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, HEAD');
    response.headers.set('Access-Control-Max-Age', '86400');
  }

  // Add cache headers for static assets
  if (request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|avif|woff|woff2)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Add cache headers for sitemaps and feeds
  if (
    request.nextUrl.pathname === '/sitemap.xml' ||
    request.nextUrl.pathname === '/venues-sitemap.xml' ||
    request.nextUrl.pathname === '/feed.xml'
  ) {
    response.headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  }

  // Enable compression
  response.headers.set('Accept-Encoding', 'gzip, deflate, br');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
