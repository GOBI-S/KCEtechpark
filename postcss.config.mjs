/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ use the new plugin
    autoprefixer: {},           // keep autoprefixer
  },
};

export default config;
