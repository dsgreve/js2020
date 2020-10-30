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

const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
  console.log('KEY DOWN!')
})
input.addEventListener('keyup', function (e) {
  console.log('KEY UP!')
})
input.addEventListener('keypress', function (e) {

})

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText
    itemsUL.appendChild(newItem)
    this.value = '';
  }
})