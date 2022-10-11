// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `
  <ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  </ul>
`
div.innerHTML = ul;
// add three list items with the words "one, two, three" in them
// const li1 = document.createElement('li');
// const li2 = li1.cloneNode(true);
// const li3 = li1.cloneNode(true);

// li1.textContent = 'One';
// li2.textContent = 'Two';
// li3.textContent = 'Three';

// ul.appendChild(li1);
// li1.appendChild(li2);
// li2.appendChild(li3);
// put that list into the above wrapper


// create an image
img = document.createElement('img')
// set the source to an image

img.src = '//source.unsplash.com/random/300x300'
// set the width to 250
img.width = '250'
img.Height = '250'
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy'
// Append that image to the wrapper
div.appendChild(img)
// with HTML string, make a div, with two paragraphs inside of it
const myHtml = `
  <div class="myDiv">
    <p>This is a paragraph.</p>
    <p>This is also a paragraph.</p>
  </div>
`;

const ulElement = div.querySelector('ul');

const htmlFragment = document.createRange().createContextualFragment(myHtml);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML("beforebegin", myHtml);
// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');

myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>They are ${height}cms and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
  <button class="delete" type="button">&times; Remove</button>
  </div>
  `
  return html
}
generatePlayerCard('Scott', 26, 36)
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHtml = generatePlayerCard('Scott', 12, 150);
cardsHtml = cardsHtml += generatePlayerCard('Wes', 24, 160);
cardsHtml = cardsHtml += generatePlayerCard('Shaggy', 26, 140);
cardsHtml = cardsHtml += generatePlayerCard('Velma', 48, 130);

//console.log(cardsHtml)

// append those cards to the div
cards.innerHTML= cardsHtml;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonClicked = event.currentTarget;
  buttonClicked.parentElement.remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard))
