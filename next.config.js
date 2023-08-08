// @ts-check
/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config.ts')

const nextConfig = {
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = {
      fs: false
    }

    return config
  },
  // i18n,
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig
