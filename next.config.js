// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

//* =============================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
