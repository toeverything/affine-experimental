document.getElementById('button').addEventListener('click', async () => {
  console.log('click')
  document.getElementById(
    'content').innerText = await window.affine.ipcRenderer.invoke(
    'com.calculator.aPlusB', 1, 2)
})
document.getElementById('button-old').addEventListener('click', async () => {
  console.log('click')
  document.getElementById(
    'content').innerText = await window.affine.ipcRenderer.invoke(
    'old-a-plus-b', 1, 2)
})

const app = document.getElementById('app')
const plugins = await affine.ipcRenderer.invoke('list-plugins')

app.innerHTML = `
  <ul>
    ${plugins.map(plugin => (
  `
        <li>
          ${plugin.id} - ${plugin.name}
          <button class="button">import</button>
        </li>
      `
))}
  </ul>
`


async function onclickPlugin () {
  const { default: module } = await import('./plugins/calculator/index.js')
  await module.ui()
}

document.querySelectorAll('.button')
  .forEach(element => {
    element.addEventListener('click', onclickPlugin)
})
