/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "tempvent.co";

const nextConfig: NextConfig = {
  output: "export",
  images: { 
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },

  // Serve under "/tempvent.co" in production:
  basePath: isProd ? `/${repoName}` : "",
  // Prefix your CSS/JS/assets so they load correctly:
  assetPrefix: isProd ? `/${repoName}/` : "",

  // Ensure it exports each route as a directory with index.html:
  trailingSlash: true,

  // Copy static files to the output directory
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|mp4|webm)$/,
      type: 'asset/resource',
      generator: {
        filename: isProd ? `${repoName}/static/[hash][ext]` : 'static/[hash][ext]'
      }
    });
    return config;
  },
};

module.exports = nextConfig;
