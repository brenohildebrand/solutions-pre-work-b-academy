const form = document.querySelector('[data-js=car-form]')
const urlInput = document.querySelector('[data-js=url]')
const brandInput = document.querySelector('[data-js=marca]')
const modelInput = document.querySelector('[data-js=modelo]')
const yearInput = document.querySelector('[data-js=ano]')
const plateInput = document.querySelector('[data-js=placa]')
const colorInput = document.querySelector('[data-js=cor]')
const table = document.querySelector('[data-js=table]')

const currentYear = new Date().getFullYear();
const firstYearConsidered = 1980;

const years = new Array(currentYear-firstYearConsidered+1);

for(let i = 0; i < years.length; i++)
  years[i] = firstYearConsidered + i;

yearInput.innerHTML = years.reduce((options, year) => {
  return options + `<option value="${year}">${year}</option>`
}, '')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const url = event.target.elements.url.value;
  const marca = event.target.elements.marca.value;
  const modelo = event.target.elements.modelo.value;
  const ano = event.target.elements.ano.value;
  const placa = event.target.elements.placa.value;
  const cor = event.target.elements.cor.value;

  const row = document.createElement('tr')

  row.innerHTML = `
      <td>${url}</td>
      <td>${marca}</td>
      <td>${modelo}</td>
      <td>${ano}</td>
      <td>${placa}</td>
      <td>${cor}</td>
  `

  table.appendChild(row)

  urlInput.value = ''
  brandInput.value = ''
  modelInput.value = ''
  yearInput.value = ''
  plateInput.value = ''
  colorInput.value = ''

  urlInput.focus()

})


