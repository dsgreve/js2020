const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a p';
myParagraph.classList.add('special');

const myImage = document.createElement('img');

myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice Photo!'
const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myParagraph);
console.log(myImage);
console.log(myDiv);

// adding elements seperatley will cause the page to repaint 3 times
// document.body.appendChild(myDiv);
// myDiv.appendChild(myImage);
// myDiv.appendChild(myParagraph);

// reverse the order so myDiv is inserted last
myDiv.appendChild(myImage);
myDiv.appendChild(myParagraph);
console.log(myDiv);
document.body.appendChild(myDiv);

// need to add something to top of myDiv
const heading = document.createElement('h2');
heading.textContent = 'Cool Beans!';

myDiv.insertAdjacentElement('beforebegin', heading);
myDiv.insertAdjacentElement('afterbegin', heading);

const myList = document.createElement('ul');
const liOne = document.createElement('li');
const liTwo = liOne.cloneNode(true);
const liThree = liOne.cloneNode(true);
const liFour = liOne.cloneNode(true);
const liFive = liOne.cloneNode(true);

liOne.textContent = 'One'
liTwo.textContent = 'Two';
liThree.textContent = 'Three';
liFour.textContent = 'Four';
liFive.textContent = 'Five';

myList.appendChild(liThree)
liThree.insertAdjacentElement('beforebegin', liTwo)
liTwo.insertAdjacentElement('beforebegin', liOne)
liThree.insertAdjacentElement('beforeend', liFour)
liFour.insertAdjacentElement('beforeend', liFive)
myDiv.appendChild(myList);

