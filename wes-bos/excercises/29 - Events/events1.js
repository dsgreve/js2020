const butts = document.querySelector('.butts');
const coolButt = document.querySelector('.cool');
// callback function is a funciton called by a method to be used at a later point

function handleClick() {
  console.log("Clicked");
}


const hooray = () => console.log('Hooray');
butts.addEventListener('click', handleClick);
coolButt.addEventListener("click", hooray);

//butts.removeEventListener('click', handleClick);

// listen to events on mulitple items

const buyButtons = document.querySelectorAll(".buy");
function attachListenerBuyButton(e) {
  console.log('Binding Buy Buttons')
  e.addEventListener("click", buyItem);
}

function buyItem() {
  console.log(`Buy Item`);
}

buyButtons.forEach(attachListenerBuyButton);

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('You Clicked Button');
  });
});

