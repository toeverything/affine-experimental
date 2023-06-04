import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('apis', {
  // bypass
  aPlusB: (...args) => ipcRenderer.invoke('aPlusB', ...args)
})
