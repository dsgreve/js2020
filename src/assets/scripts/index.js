import '../styles/style.css'

//const validator = require('validator'); old node way
import isEmail from 'validator/lib/isEmail'; // new js way and only get what is needed 
import tripleMe from './components/tripleMe';

console.log(isEmail('altair.com'));
console.log(tripleMe(90))

document.querySelector("h1").innerText = 'Hey Jude'
document.querySelector("h2").classList.add ('hello')

if (module.hot) {
  module.hot.accept()
}
