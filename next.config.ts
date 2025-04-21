import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  runtime: "edge",
  images: {
    domains: ["fakestoreapi.com"],
  },
};

export default nextConfig;
