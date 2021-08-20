// Exercício 01
const nameInput = document.querySelector("[data-js=name]")
const dontCapitalize = ['de', 'da', 'das', 'do', 'dos']

nameInput.addEventListener('input', (event) => {
  const name = event.target.value;
  event.target.value = formatText(name);
})

const formatText = (text) => {
  const lower = text.toLowerCase()
  const words = lower.split(' ')

  const formattedText = words
  .map((word) => dontCapitalize.includes(word) ? word: capitalize(word))
  .join(' ')

  return formattedText
}

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

// Exercício 02
const colorsForm = document.querySelector('[data-js=color-form]')
const colorsLabel = document.createElement('label')
colorsLabel.setAttribute('value', 'colors')
colorsLabel.innerText = 'Colors'

const createColor = (color) => {
  const div = document.createElement('div')

  div.style.width = '100px'
  div.style.height = '100px'
  div.style.backgroundColor = color
  div.style.display = 'none'

  return div
}

const createColorsMap = (...colors) => {
  const colorsMap = {};

  colors.map((currentColor) => colorsMap[currentColor] = createColor(currentColor))

  return colorsMap
}

const colorsMap = createColorsMap('red', 'green', 'blue', 'black', 'yellow')
const colorsOrganizer = document.createElement('div');
Object.values(colorsMap).forEach((div) => colorsOrganizer.appendChild(div))
colorsOrganizer.style.display = 'flex'
colorsOrganizer.style.flexDirection = 'row'
colorsOrganizer.style.justifyContent = 'center'
colorsOrganizer.style.margin = 'auto'
colorsOrganizer.style.height = '100px'

const colorsSelect = document.createElement('select')
colorsSelect.setAttribute('multiple', '')
Object.keys(colorsMap).map((color) => {
  const option = document.createElement('option')
  option.value = color
  option.innerText = color

  colorsSelect.appendChild(option)
})

colorsForm.appendChild(colorsLabel)
colorsForm.appendChild(colorsSelect)
colorsForm.insertAdjacentElement('afterend', colorsOrganizer);

colorsSelect.addEventListener('change', (event) => {

  const options = event.target.options

  for(let i = 0; i < options.length; i++){

    const currentOption = options[i]
    const currentColor = currentOption.value

    if(currentOption.selected === true){
      colorsMap[currentColor].style.display = 'block'
    } else {
      colorsMap[currentColor].style.display = 'none'
    }
  }
})
