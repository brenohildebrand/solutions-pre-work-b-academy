import './style.css'

const form = document.querySelector('[data-js=car-form]')
const table = document.querySelector('[data-js=table]')

const addCar = function (car) {
  const tableRow = document.createElement('tr')

  const tableMessage = document.querySelector('[data-js=tableMessage]')
  if(tableMessage) document.body.removeChild(tableMessage)

  Object.entries(car).map(([field, description]) => {
    const cell = document.createElement('td')

    if(field === 'image') {
      const img = document.createElement('img')
      img.setAttribute('src', description)
      img.style.width = 'auto'
      img.style.height = '100px'
      cell.appendChild(img)
    } else if(field === 'color') {
      const div = document.createElement('div')
      div.style.display = 'inline-block'
      div.style.width = '100px'
      div.style.height = '100px'
      div.style.backgroundColor = description
      cell.appendChild(div)
    } else {
      cell.innerText = description
    }

    tableRow.appendChild(cell);
  })

  table.children[1].appendChild(tableRow);
}

const addMessage = function (message) {
  const tableMessage = document.createElement('div')
  tableMessage.setAttribute('data-js', 'tableMessage')
  tableMessage.innerText = message
  tableMessage.style.position = 'relative'
  tableMessage.style.bottom = '60px'

  table.insertAdjacentElement('afterend', tableMessage)
}

const registerCar = async function (car) {

  const res = await fetch('http://localhost:3333/cars', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  })
  .then(res => res.json())

  return res
}

const throwMessage = function (message, type) {

  const div = document.createElement('div');

  div.style.position = 'fixed'
  div.style.padding = '8px 25px'
  div.style.right = '30px'
  div.style.top = '30px'
  div.style.textAlign = 'left'
  div.style.boxShadow = '0px 0px 3px 1px rgba(0, 0, 0, 0.2)'
  div.style.borderRadius = '15px'
  div.style.transition = 'opacity 1s ease-in-out'

  const title = document.createElement('p')
  const content = document.createElement('p')

  content.style.position = 'relative'
  content.style.bottom = '5px'

  title.style.fontWeight = 'bold'

  switch(type) {
    case 'failure':
      title.style.color = '#f44336'
      title.innerText = 'Failure'
      break
    case 'success':
      title.style.color = '#4caf50'
      title.innerText = 'Success'
      break
  }

  content.innerText = message

  div.appendChild(title)
  div.appendChild(content)

  document.body.appendChild(div)

  setTimeout(() => {
    div.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(div)
    }, 1000)
  }, 2000)

}

const populateTable = async function requestCars() {
  const cars = await fetch('http://localhost:3333/cars').then(res => res.json())

  if(cars.length === 0) addMessage('Nenhum carro encontrado')
  else cars.map(car => addCar(car))
}

const setup = function () {
  populateTable()
}

setup()

form.addEventListener('submit', async function (event) {
  event.preventDefault()

  const elements = event.target.elements
  const carProperties = ['image', 'brandModel', 'year', 'plate', 'color']
  const newCar = {}

  carProperties.forEach((carProperty) => {
    newCar[carProperty] = elements[carProperty].value
  })

  const { error, message } = await registerCar(newCar)

  if(error) {
    throwMessage(message, 'failure')
  } else {
    throwMessage(message, 'success')
    addCar(newCar)
  }
})
