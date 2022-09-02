/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['indegene.com', 'indegenerep.s3.ap-south-1.amazonaws.com'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
