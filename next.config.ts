/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { 
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },

  // Use both basePath and assetPrefix for GitHub Pages
  basePath: isProd ? "/tempvent.co" : "",
  assetPrefix: isProd ? "/tempvent.co/" : "",

  // Ensure it exports each route as a directory with index.html:
  trailingSlash: true,

  // Copy static files to the output directory
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|mp4|webm)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
