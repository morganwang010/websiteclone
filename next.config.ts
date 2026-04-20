import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
};
module.exports = {
  output: "export",  // 👈 加上这个
};
export default nextConfig;
