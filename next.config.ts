import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",                   // fully static export for any static host :contentReference[oaicite:5]{index=5}
  images: { unoptimized: true },      // disable image optimization (static-host friendly) :contentReference[oaicite:6]{index=6}

  // 1. Serve under the "/repo-name" subpath in production:
  basePath: isProd ? "/repo-name" : "",
  // 2. Prefix all asset URLs with the subpath so CSS/JS/images load correctly:
  assetPrefix: isProd ? "/repo-name/" : "",

  // 3. (Optional) Ensure routes map to directories (for index.html):
  trailingSlash: true,
};

module.exports = nextConfig;
