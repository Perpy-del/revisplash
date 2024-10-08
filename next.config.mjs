/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 's3.us-west-2.amazonaws.com',
            port: '',
            pathname: '/images.unsplash.com/**',
          },
        ],
      },
};

export default nextConfig;
