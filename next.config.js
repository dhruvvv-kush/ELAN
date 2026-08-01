/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ELAN',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;
