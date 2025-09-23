import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://opengraph.b-cdn.net',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
  output: 'export', // Enable static export
  distDir: 'dist',  // Specify the output directory
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static exports
  },
  eslint: {
    // ⚡ Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
