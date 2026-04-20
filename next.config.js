/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Prevent clickjacking — page can't be embedded in iframes on other origins
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Stop browsers from MIME-sniffing the content type
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Full referrer within same origin, no referrer on cross-origin
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Restrict browser features/APIs (camera, mic, geolocation, etc.)
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Force HTTPS for 1 year (only takes effect once served over HTTPS)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // Enable XSS filtering in older browsers
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Content Security Policy
  // - default-src self: only load resources from own origin by default
  // - script-src: allow self + inline scripts (needed for Next.js) + Google Fonts
  // - style-src: allow self + inline styles + Google Fonts
  // - font-src: allow self + Google Fonts CDN
  // - img-src: allow self + data URIs (for inline SVGs/grain overlay)
  // - connect-src: allow self + Vercel analytics if added later
  // - frame-ancestors: no iframing from external origins
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com https://res.cloudinary.com",
      "img-src 'self' data: blob:",
      "media-src 'self'",
      "connect-src 'self'",
      "worker-src blob:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
