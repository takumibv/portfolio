/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio_next" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
