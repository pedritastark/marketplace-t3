import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.geoguessr.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
        pathname: '/pngimages/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        pathname: '/id/**',
      },
    ],
  },
};

export default nextConfig;
