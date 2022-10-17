// TODO: Select elements on page
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");

const shakeBtn = document.querySelector(".shake");
const MOVE_AMOUNT = 10;
// setup canvas for drawing
// const width = canvas.width;
// const height = canvas.height;
// destructured version
const { width, height } = canvas;
// create random x, y starting points

function getRandomNumber(int) {
  return Math.floor(Math.random() * int)
}

let x = getRandomNumber(width);
let y = getRandomNumber(height);


ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// write draw function
function draw({key}) {
  ctx.beginPath()
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y = y - MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y = y + MOVE_AMOUNT
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT
      break;
    default:
      break;
  }
  ctx.lineTo(x,y);
  ctx.stroke();
  
}
// handler for keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key})
  }
}
// clear/shake function
// listen for arrow keys
window.addEventListener('keydown', handleKey);