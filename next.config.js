/** @type {import('next').NextConfig} */
const nextConfig = {
   images: { unoptimized: true }, 
  output: "export",
  
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
