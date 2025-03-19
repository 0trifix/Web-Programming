import './style.css'

const div = document.querySelector('#tekst')!;
const btn = document.querySelector('#btn')!;

btn.addEventListener( // ? wordt gebruikt om te checken of het element bestaat, maar omdat ik ! gebruik is dit niet nodig
  'click', // event type
  () => { 
    //div.textContent = div.textContent === 'tekst' ? 'verander' : 'tekst'; // Hetzelfde als de if else statement hieronder maar dan in 1 regel
    if(div.textContent === 'tekst') {
      div.textContent = 'verander'; 
    }
    else {
      div.textContent = 'tekst';
    }
  }
)
