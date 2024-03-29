const { AsyncCall } = require('async-call-rpc')
const { MessagePortChannel } = require('./utils')

import('./plugins/calculator/index.js').then(async ({ default: module }) => {
  const { default: server } = await module.server()
  const { parentPort } = require('node:worker_threads')
  AsyncCall(server, {
    channel: new MessagePortChannel(parentPort)
  })
  console.log('plugin register done!')
})
