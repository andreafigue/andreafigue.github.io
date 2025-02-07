import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/t2050/' : '',
  basePath: isProd ? '/t2050' : '',
  output: 'export'
};

module.exports = nextConfig;

export default nextConfig;
