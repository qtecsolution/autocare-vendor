/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "146.190.87.58",
            },
            {
                protocol: "https",
                hostname: "autocare.sgp1.cdn.digitaloceanspaces.com",
            },
        ],
    },
};

export default nextConfig;
