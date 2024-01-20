const path = require('path');

module.exports = (config, context) => {
  return {
    ...config,
    entry: {
      main: path.join(__dirname, 'src/main.tsx'),
      content: path.join(__dirname, 'src/app/content/content.ts'),
      background: path.join(__dirname, 'src/app/background/background.ts'),
    },
    output: { ...config.output, filename: '[name].js' },
  };
};
