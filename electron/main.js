const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const { AsyncCall } = require('async-call-rpc')
const { Worker } = require('node:worker_threads')
const { ThreadWorkerChannel } = require('./utils')

const rpc = AsyncCall({}, {
  channel: new ThreadWorkerChannel(
    new Worker(path.resolve(__dirname, './worker.js'))
  )
})

// register plugin
import('./plugins/calculator/index.js').then(({
  default: module
}) => {
  module.commands.forEach(command => {
    ipcMain.handle(command, (event, ...args) => rpc[command](...args))
  })
})

ipcMain.handle('old-a-plus-b', async (_, a, b) => {
  for (let i = 0; i < 1e10; i++) {

  }
  return a + b;
})

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

