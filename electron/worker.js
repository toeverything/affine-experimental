const { AsyncCall } = require('async-call-rpc')
const { MessagePortChannel } = require('./utils')

AsyncCall({
  aPlusB: (a, b) => {
    return a + b
  }
}, {
  channel: new MessagePortChannel(require('node:worker_threads').parentPort)
})
