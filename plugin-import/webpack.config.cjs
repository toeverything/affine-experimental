module.exports = {
  mode: 'production',
  target: 'web',
  output: {
    environment: {
      dynamicImport: true,
      module: true
    }
  },
  optimization: {
    minimize: false,
  }
}
