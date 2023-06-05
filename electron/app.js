document.getElementById('button').addEventListener('click', async () => {
  console.log('click')
  document.getElementById('content').innerText = await window.affine.ipcRenderer.invoke('com.calculator.aPlusB', 1, 2)
})
document.getElementById('button-old').addEventListener('click', async () => {
  console.log('click')
  document.getElementById('content').innerText = await window.affine.ipcRenderer.invoke('old-a-plus-b', 1, 2)
})
