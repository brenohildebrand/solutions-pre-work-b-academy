const nameInput = document.querySelector("[data-js=name]")

nameInput.addEventListener('input', (event) => {
  event.preventDefault();
  event.target.value = formatInput(event.target.value);
})

const formatInput = (string) => {
  const lower = string.toLowerCase();
  const words = lower.split(' ');

  const capitalizedWords = words.map((word) => {
    switch(word) {
      case 'de':
      case 'da':
      case 'do':
      case 'dos':
        break;
      default:
        word = capitalize(word);
    }

    return word;
  })

  return capitalizedWords.join(' ');
}

const capitalize = (word) => {

  const firstLetter = word.charAt(0);
  const lower = word.toLowerCase();

  return firstLetter.toUpperCase() + lower.slice(1);

}
