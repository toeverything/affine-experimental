globalThis.AffinePluginInfra = {
  definePlugin: (plugin) => {
    console.log('register plugin:', plugin)
  }
}

import('http://localhost:3000/hello-world/dist/index.js')
.then(() => {
  console.log('success')
})
