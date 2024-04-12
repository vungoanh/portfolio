import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'vn'],

  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(vn|en)/:path*']
};