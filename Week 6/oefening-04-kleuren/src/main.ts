import './style.css'

const divList = document.querySelector("#divList");
let data = Array.from({length: 6}, 
                       () => Math.floor(Math.random() * 100)
                       );

data.map(n => `<div>${n}</div>`).forEach(div => {divList?.insertAdjacentHTML('beforeend', div)});

const btn = document.querySelector('#btn')!;
 btn.addEventListener(
  'click',
  () => {
    data = data.map(n => Math.floor(Math.random() * 100));
    const divs = divList.querySelectorAll('div');
    divs.forEach((div, i) => {
                div.textContent = data[i]
                if (data[i] >= 10) {
                  div.classList.add('red');
                } else {
                  div.classList.remove('red');                
                }
                }
                );
  }
 )
