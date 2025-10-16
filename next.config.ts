import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Enable React strict mode (helps catch bugs in dev)
  reactStrictMode: true,

  // ✅ Image optimization ON (for Vercel/production)
  images: {
    unoptimized: false,
  },

  // ✅ Optional: security / CORS headers for your /api routes
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://opengraph.b-cdn.net",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;