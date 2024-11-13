/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ui-avatars.com'],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
