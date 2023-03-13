/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media-cdn.tripadvisor.com"],
  },
}

module.exports = nextConfig