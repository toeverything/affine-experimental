const div = document.getElementById('content')
const child = document.createElement('div')
child.innerHTML = `
  <span>
    Hello, this is plugin
  </span>
`
div.appendChild(
  child
)
