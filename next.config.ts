import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["redactie.rtl.nl"],
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
