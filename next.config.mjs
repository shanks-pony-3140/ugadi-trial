/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ugadi-trial',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
