import { NextResponse } from "next/server"

export function middleware(request) {
  const response = NextResponse.next()

  // Configuración de headers de seguridad
  const securityHeaders = {
    "X-XSS-Protection": "1; mode=block",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Content-Security-Policy":
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "img-src 'self' data: https: blob:; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "connect-src 'self' https://api.example.com; " +
      "frame-ancestors 'none';",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  }

  // Aplicar headers de seguridad
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: "/:path*",
}

