const { Worker } = require('worker_threads')
const { AsyncCall } = require('async-call-rpc')

const worker = new Worker('./worker.js', {
  env: {
    AFFINE_IS_MAIN_WORKER: 'true'
  }
})

const rpc = AsyncCall({}, {
  channel: {
    on (listener) {
      worker.addListener('message', listener)
    },
    send (data) {
      worker.postMessage(data)
    }
  }
})
