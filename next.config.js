/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Ensure webpack resolves .tsx and .ts extensions
    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js', ...config.resolve.extensions];

    // Strip import assertions from packages with ES2022 syntax
    config.module.rules.unshift({
      test: /\.m?js$/,
      include: [
        /node_modules\/@base-org/,
        /node_modules\/@wagmi\/connectors/,
        /node_modules\/@coinbase/,
      ],
      use: [
        path.resolve(__dirname, './strip-import-assertions-loader.js'),
      ],
    });

    return config;
  },
}

module.exports = nextConfig
