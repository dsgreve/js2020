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
function handleBuyButtonClick(event) {
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  // in most cases current target but be cautious of nested elements
  // it is possible to click on multiple things at once - progigation
  // clicks "bubble up" a click on a span - parent - window
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // stop bubbling up
  event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(event) {
  console.log(event.target);
});
