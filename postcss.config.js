const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss('./tailwind.config.js'),
    autoprefixer({
      add: true,
      grid: false,
    }),
    cssnano({
      preset: 'default',
    }),
  ],
};
