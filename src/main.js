import pic from './assets/cat.jpg'
const div = document.createElement('div')
div.innerHTML = '引入main.js了'

document.body.appendChild(div)

function component() {
  let element = document.createElement('div')
  const img = new Image()
  img.src = pic
  img.style.width = '50px'
  img.style.height = '50px'
  element.appendChild(img)

  return element
}

document.body.appendChild(component())
