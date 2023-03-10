/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    removeConsole: false,
  },
};

module.exports = nextConfig;
