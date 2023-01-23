/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  //...
  experimental: {
    async rewrites() {
      return [
        { source: '/:id', destination: '/[id]' },
      ];
    },
  },
};

module.exports = nextConfig
