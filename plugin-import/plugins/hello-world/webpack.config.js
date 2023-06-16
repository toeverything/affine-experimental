const { resolve } = require('node:path')

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist')
  },
  externals: {
    '@toeverything/plugin-infra/manager': 'AffinePluginInfra',
  }
}
