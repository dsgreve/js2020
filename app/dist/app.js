// the thing    event type    code to run
// button       click         change color
// input        hits return   get results

const btn = document.querySelector('#clicker')
btn.addEventListener('mouseover', function () {
  console.log('moused over me')
  const height = Math.floor(Math.random() * window.innerHeight)
  const width = Math.floor(Math.random() * window.innerWidth)
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function () {
  console.log(this.innerText);

})
const changeColor = function () {
  console.log(this);
  h1.style.color = this.style.backgroundColor;
  console.log(this.style.backgroundColor);
}

//const h1 = document.querySelector('h1')
const container = document.querySelector('#boxes');

for (let color of colors) {
  const box = document.createElement('div')
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener('click', changeColor);
}