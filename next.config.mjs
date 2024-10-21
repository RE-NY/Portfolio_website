/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Enable async WebAssembly
      config.experiments = {
        asyncWebAssembly: true,
        layers: true // This enables the 'layers' option to avoid the new error
      };
  
      return config;
    },
  };
  
  export default nextConfig;
  