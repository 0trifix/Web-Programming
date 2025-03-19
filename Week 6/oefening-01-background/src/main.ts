//npm create vite@latest $NAAM -- --template vanilla-ts

import './style.css'

const div = document.querySelector('#changeDiv')!; // ! wordt gebruikt om aan te geven dat het element altijd bestaat
const btn = document.querySelector('#changeBtn')!;

btn?.addEventListener( // ? wordt gebruikt om te checken of het element bestaat, maar omdat ik ! gebruik is dit niet nodig
  'click', // event type
  () => { 
  div.classList.toggle('yellowBackground'); 
  }
)

/// EINDE OEFENING
/// EXTRA INFO

//div.innerHTML = 'Hello World'; // innerHTML wordt gebruikt om de tekst in een element te veranderen, maar is niet veilig, omdat het ook HTML code kan bevatten.
div.textContent = 'Hello World'; // textContent doet hetzelfde als innerHTML, maar dan zonder dat het HTML code kan bevatten.

div.insertAdjacentHTML(
  'beforebegin', // position
  "<div>hallo</div>"
); // insertAdjacentHTML wordt gebruikt om HTML code toe te voegen

const list = document.querySelector('#list')!;
const data = ['item 1', 'item 2', 'item 3'];

data.map(w => `<li>${w}</li>`)
.forEach(li => list.insertAdjacentHTML('beforeend', li)); // forEach wordt gebruikt om door een array te loopen
