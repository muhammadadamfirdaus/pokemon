/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DEVELOPMENT: process.env.NEXT_PUBLIC_DEVELOPMENT,
    VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
