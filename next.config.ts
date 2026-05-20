import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    localPatterns: [{ pathname: "/uploads/**" }],
  },
};

export default nextConfig;
