// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPWA = require("next-pwa");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.optimization.splitChunks.cacheGroups = {};
      config.optimization.minimize = true;
      return config;
    },
  },
  target: 'serverless',
  images: {
    domains: ['wallpaperset.com'],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  output: "standalone"
};

module.exports = withPWA(withNx(nextConfig));
