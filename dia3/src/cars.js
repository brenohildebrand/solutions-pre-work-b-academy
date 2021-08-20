const form = document.querySelector('[data-js=car-form]')
const urlInput = document.querySelector('[data-js=url]')
const brandInput = document.querySelector('[data-js=marca]')
const modelInput = document.querySelector('[data-js=modelo]')
const yearInput = document.querySelector('[data-js=ano]')
const plateInput = document.querySelector('[data-js=placa]')
const colorInput = document.querySelector('[data-js=cor]')
const table = document.querySelector('[data-js=table]')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const { url, marca, modelo, ano, placa, cor } = event.target.elements

  const row = document.createElement('tr')

  row.appendChild(createImage(url.value))
  row.appendChild(createRowElement(marca.value))
  row.appendChild(createRowElement(modelo.value))
  row.appendChild(createRowElement(ano.value))
  row.appendChild(createRowElement(placa.value))
  row.appendChild(createColor(cor.value))

  table.children[1].appendChild(row)

  urlInput.value = ''
  brandInput.value = ''
  modelInput.value = ''
  yearInput.value = ''
  plateInput.value = ''
  colorInput.value = ''

  urlInput.focus()
})

const createImage = (url) => {
  const td = createRowElement('')

  const img = document.createElement('img')
  img.setAttribute('src', url)
  img.style.maxWidth = '192px'
  img.style.maxHeight = '108px'

  td.appendChild(img)

  return td
}

const createRowElement = (text) => {
  const td = document.createElement('td')
  td.innerText = text

  return td
}

const createColor = (color) => {
  const td = createRowElement('')

  const div = document.createElement('div')
  div.style.display = 'inline-block'
  div.style.width = '80px'
  div.style.height = '80px'
  div.style.backgroundColor = color

  td.appendChild(div)

  return td
}


