/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "era-flowers.s3.amazonaws.com",
        port: ""
      }
    ]
  }
};

export default nextConfig;
