const path = require('path');

module.exports = {
  resolver: {
    // Tạo alias cho đường dẫn tương đối 'components' và 'assets'
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts'],
};
