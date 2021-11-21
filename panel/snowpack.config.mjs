/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-dotenv', '@prefresh/snowpack'],
  buildOptions: {
    baseUrl: '/panel/build/'
  },
};
