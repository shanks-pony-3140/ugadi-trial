import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ugadi-trial',
};

// Configuration for GitHub Pages Deployment

export default nextConfig;
