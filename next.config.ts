import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // enable hostname resmim.net for next/image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resmim.net",
        port: "",
        pathname: "/cdn/**",
      },
    ],
  },
};

export default nextConfig;
