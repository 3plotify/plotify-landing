/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'de-DE'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig
