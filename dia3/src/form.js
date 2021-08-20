// Exercício 01

const nameInput = document.querySelector("[data-js=name]")

nameInput.addEventListener('input', (event) => {
  event.target.value = formatInput(event.target.value)
})

const formatInput = (string) => {
  const lower = string.toLowerCase()
  const words = lower.split(' ')

  const capitalizedWords = words.map((word) => {
    switch(word) {
      case 'de':
      case 'da':
      case 'do':
      case 'dos':
        break
      default:
        word = capitalize(word)
    }

    return word
  })

  return capitalizedWords.join(' ')
}

const capitalize = (word) => {

  const firstLetter = word.charAt(0)
  const lower = word.toLowerCase()

  return firstLetter.toUpperCase() + lower.slice(1)

}

// Exercício 02

function createDiv (color) {
  const div = document.createElement('div')

  div.style.width = '100px'
  div.style.height = '100px'
  div.style.backgroundColor = color

  div.classList.add('hidden')

  return div
}

function createDivs (...colors) {
  const divs = {};

  for(let i = 0; i < colors.length; i++) {
    const currentColor = colors[i]
    divs[currentColor] = createDiv(currentColor)
  }

  return divs
}

const form = document.querySelector('form')

// Label
const colorsLabel = document.createElement('label')
colorsLabel.setAttribute('value', 'colors')
colorsLabel.innerText = 'Colors'


form.appendChild(colorsLabel)

// Select and Divs
const organizer = document.createElement('div');
organizer.classList.add('organizer')

const colorBoxes = createDivs('red', 'green', 'blue', 'black', 'yellow')

const colorsSelect = document.createElement('select')
colorsSelect.setAttribute('multiple', '')
colorsSelect.innerHTML = Object.keys(colorBoxes).reduce((options, color) => {
  return options + `<option value="${color}">${color}</value>`
}, '')

form.appendChild(colorsSelect)
form.insertAdjacentElement('afterend', organizer);
Object.values(colorBoxes).forEach((div) => organizer.append(div))

colorsSelect.addEventListener('change', (event) => {

  const options = event.target.options

  for(let i = 0; i < options.length; i++) {

    const currentOption = options[i]
    const currentColor = options[i].value

    if(currentOption.selected === true){
      colorBoxes[currentColor].classList.remove('hidden')
    } else {
      colorBoxes[currentColor].classList.add('hidden')
    }

  }

})
