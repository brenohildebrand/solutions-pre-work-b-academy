import './style.css'

const app = document.querySelector('[data-js="app"]');
const button = document.querySelector('button');

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
button.addEventListener('click', (event) => {
  toggleAppVisibility();
}, false);

const toggleAppVisibility = () => {
  const isAppVisible = app.style.display !== 'none';
  isAppVisible ? hideApp() : showApp();
}

const hideApp = () => app.style.display = 'none';

const showApp = () => app.style.display = 'block';




