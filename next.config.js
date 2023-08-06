/** @type {import('next').NextConfig} */
const nextConfig = {
 
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.w3schools.com'],
  },
}

module.exports = nextConfig
