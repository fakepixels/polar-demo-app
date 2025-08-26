import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper CSS handling in production
  reactStrictMode: true,
  // Ensure CSS is processed correctly
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;