/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", port: "", pathname: "/**", search: "" },
      { protocol: "https", hostname: "premmarbles.com", port: "", pathname: "/**", search: "" },
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
