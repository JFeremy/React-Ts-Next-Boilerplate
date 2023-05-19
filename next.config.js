/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig
