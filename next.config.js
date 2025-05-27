/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Mount the app under /tempvent.co
  basePath: isProd ? "/tempvent.co" : "",
  // Prefix all asset URLs with /tempvent.co/
  assetPrefix: isProd ? "/tempvent.co/" : "",

  // Ensure it exports each route as a directory with index.html:
  trailingSlash: true,

  // Add webpack configuration for video files and other static assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|svg|png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]'
      }
    });
    return config;
  },
};

module.exports = nextConfig; 