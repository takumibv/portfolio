const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  publicRuntimeConfig: { urlPrefix },
  trailingSlash: true,
};

module.exports = nextConfig;
