import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "redactie.rtl.nl",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/nieuws",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
