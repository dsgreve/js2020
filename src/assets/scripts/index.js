import '../styles/style.css'
//import  './components/deck-of-cards'
//const validator = require('validator'); old node way
/** 
import isEmail from 'validator/lib/isEmail'; // new js way and only get what is needed 
import tripleMe from './components/tripleMe';
console.log(isEmail('at@altair.com'));
console.log(tripleMe(10))
*/

document.querySelector("h1").innerText = 'Hey Judy'
document.querySelector("h2").classList.add ('hello')

const allLis = document.querySelectorAll('li')

for (let i = 0; i < allLis; i++) {
  console.log(allLis[0].innerText)
}

alert('loaded again')
if (module.hot) {
  module.hot.accept()
}