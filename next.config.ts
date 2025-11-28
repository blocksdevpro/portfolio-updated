import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "40ar4rk0hv.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
