import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})({
  // Provide an empty turbopack config to avoid Turbopack vs webpack errors
  turbopack: {},
});

export default nextConfig;
