/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Рекомендуется добавить для поддержки кросс-браузерных стилей
  },
};

export default config;
