/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // Serve under "/tempvent.co" in production:
  basePath: isProd ? "/tempvent.co" : "",
  // Prefix your CSS/JS/assets so they load correctly:
  assetPrefix: isProd ? "/tempvent.co/" : "",

  // Ensure it exports each route as a directory with index.html:
  trailingSlash: true,
};

module.exports = nextConfig;
