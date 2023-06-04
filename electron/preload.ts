import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('apis', {
  // bypass
  'com.calculator.aPlusB': (...args) => ipcRenderer.invoke(
    'com.calculator.aPlusB', ...args)
})
