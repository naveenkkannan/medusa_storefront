const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")
// next.config.js
const path = require('path');
require('dotenv').config();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))



module.exports = {
  // This tells Next.js where to find your app directory
  srcDir: path.join(__dirname, 'src'),
env: {
        MEDUSA_BACKEND_URL: process.env.MEDUSA_BACKEND_URL,
    },

};


    
module.exports = nextConfig
