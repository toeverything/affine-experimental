/**
 * @implements {import('async-call-rpc').EventBasedChannel}
 */
exports.MessagePortChannel = class MessagePortChannel {
  constructor (port) {
    /**
     * @type {import('node:worker_threads').MessagePort}
     */
    this.port = port
  }

  on (listener) {
    this.port.addListener('message', listener)
    return () => {
      this.port.removeListener('message', listener)
    }
  }

  send (data) {
    this.port.postMessage(data)
  }
}

exports.ThreadWorkerChannel = class ThreadWorkerChannel {
  constructor (worker) {
    /**
     * @type {import('node:worker_threads').Worker}
     */
    this.worker = worker
    const { ipcMain } = require('electron')
    this.ipcMain = ipcMain
  }

  on (listener) {
    this.worker.addListener('message', listener)
    return () => {
      this.worker.removeListener('message', listener)
    }
  }

  send (data) {
    this.worker.postMessage(data)
  }
}
