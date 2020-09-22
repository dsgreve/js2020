import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './freelancer.svg';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // lodash imported above

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');
  
  btn.innerHTML = 'Click me!';
  btn.onclick = printMe;
  element.appendChild(btn);

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());