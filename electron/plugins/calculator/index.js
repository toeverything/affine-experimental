export default {
  // Unique id for each plugin
  id: 'com.affine.calculator',
  name: 'calculator',
  // Registered commands
  commands: [
    'com.calculator.aPlusB'
  ],
  server: () => import('./server.js'),
  ui: () => import('./ui.js')
}
