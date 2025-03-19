import './style.css'

const divList = document.querySelector("#divList");

divList.insertAdjacentHTML('beforeend', '<div>1</div>')!;
divList.insertAdjacentHTML('beforeend', '<div>2</div>')!;
divList.insertAdjacentHTML('beforeend', '<div>3</div>')!;

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
