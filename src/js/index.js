import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
const key = new Date().toISOString().slice(0, 10);

const main = document.querySelector('.main');
const countContainer = document.querySelector('.glass__counter--js');
const add = document.querySelector('.main__add--js');
const less = document.querySelector('.main__less--js');
let error = document.createElement('p');
let number = document.querySelector('.glass__counter--js').innerHTML;
number = parseInt(number);

if(localStorage.getItem(key)){
    countContainer.innerHTML = localStorage.getItem(key);
    number = parseInt(localStorage.getItem(key));
}else{
    localStorage.setItem(key, number);
    countContainer.innerHTML = localStorage.getItem(key);
    number = parseInt(localStorage.getItem(key));
}

add.addEventListener('click', ()=>{{
    error.classList.add('main__error--off');
    number = number + 1;
    countContainer.innerHTML = number;
    localStorage.setItem(key, number);
    }
})

less.addEventListener('click', ()=>{
    if(number > 0){
    number = number - 1;
    countContainer.innerHTML = number;
    localStorage.setItem(key, number);
    } else{
        main.appendChild(error);
        error.innerHTML = "Nie można wypić mniej niż 0 szklanek wody :)";
        error.classList.remove('main__error--off');
        error.classList.add('main__error');
    }
})
