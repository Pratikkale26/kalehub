/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

// Note: all images are local now, so no `images.remotePatterns` is needed.
// `experimental.optimizeCss` was dropped — it pulled in critters and broke the
// metadata routes (sitemap.xml/robots.txt) on Next 16.

module.exports = nextConfig;
