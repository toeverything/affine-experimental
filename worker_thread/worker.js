const { Worker, parentPort } = require('worker_threads')

if (process.env.AFFINE_IS_MAIN_WORKER === 'true') {
  new Worker('./worker.js', {
    env: {
      // avoid infinite loop
      AFFINE_IS_MAIN_WORKER: 'false'
    }
  })
} else {
  console.log('hello! this is a child worker')
}
