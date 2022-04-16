/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
