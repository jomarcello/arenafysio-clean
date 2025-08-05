import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // Force CSS cache bypass for ArenaFysio deployment
  generateBuildId: async () => {
    return `arenafysio-css-fix-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  },
  /* config options here */
};

export default nextConfig;
