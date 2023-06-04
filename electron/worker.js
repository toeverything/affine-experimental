const { AsyncCall } = require('async-call-rpc')
const { MessagePortChannel } = require('./utils')

AsyncCall(require('./plugins/calculator/index.js'), {
  channel: new MessagePortChannel(require('node:worker_threads').parentPort)
})
