import './style.css'

const table = document.querySelector('[data-js=table]')

const addCar = function (car) {
  const tableRow = document.createElement('tr')

  Object.entries(car).map(([field, description]) => {
    const cell = document.createElement('td')
    cell.innerText = description

    tableRow.appendChild(tableCell);
  })

  table.children[1].appendChild(tableRow);
}

const addMessage = function (message) {
  const tableMessage = document.createElement('div')
  tableMessage.innerText = message
  tableMessage.style.position = 'relative'
  tableMessage.style.bottom = '60px'

  table.insertAdjacentElement('afterend', tableMessage)
}

const populateTable = async function requestCars() {
  const cars = await fetch('http://localhost:3333/cars').then(res => res.json())

  if(cars.length === 0) addMessage('Nenhum carro encontrado')
  else cars.map(car => addCar(car))
}

populateTable()
