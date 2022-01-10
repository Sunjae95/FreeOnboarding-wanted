const path = require('path');

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@style': path.resolve(__dirname, 'src/style'),
    },
  },
};
