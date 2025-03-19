import './style.css'

const divList = document.querySelector("#divList");
const data = [1, 2, 3, 4, 5];

data.map(n => `<div>${n}</div>`)
.forEach(div => {divList?.insertAdjacentHTML('beforeend', div)});

const btn = document.querySelector('#btn')!;
let counter = 0;

btn.addEventListener(
  'click',
  () => {
    const divs= divList.querySelectorAll('div');
    divs.forEach(div => div.classList.remove('yellowBackground'));

    divs[counter%divs.length].classList.add('yellowBackground');
    counter++;
  }
)

//btn.addEventListener(
//  'click',
//  () => {
//    const yellowDiv = divList.querySelector('.yellowBackground');
//    const nextDiv = yellowDiv?.nextElementSibling;
//
//    yellowDiv?.classList.remove('yellowBackground');
//
//    if(!yellowDiv || !nextDiv) {
//      divList?.querySelector('div')?.classList.add('yellowBackground');
//    }
//    else {
//      nextDiv.classList.add('yellowBackground');
//    }
//  }
//)
