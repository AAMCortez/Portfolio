/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images: {
        domains: ["cdn.sanity.io"]
    }
}
require('dotenv').config();
module.exports = nextConfig
