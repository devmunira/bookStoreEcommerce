/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify : true,
  optimizeFonts : true,
  images : {
    // domains: ['localhost'],
    remotePatterns : [
      {
        protocol : "http",
        hostname : "127.0.0.1"
      },
      {
        protocol : "https",
        hostname : "i.dummyjson.com"
      },
    ],
    minimumCacheTTL : 1500000,
  }
  
}

module.exports = nextConfig
