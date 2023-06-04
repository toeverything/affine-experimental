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

ipcMain.handle('aPlusB', (event, ...args) => rpc.aPlusB(...args))

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

