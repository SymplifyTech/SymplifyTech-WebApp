/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: { images: { layoutRaw: true } },
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
