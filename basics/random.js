// random number in 4 lines
const randomOne = Math.random();
const randomTwo = randomOne * 10;
const randomThree = Math.floor(randomTwo);
const randomFour = randomThree + 1;

const oneLineRandom = Math.floor(Math.random() * 6) + 1;

const randomNumber =
  document.createTextNode(`Random number ${randomOne} as decimal. 
  Random number as whole number ${randomFour}.
  One line dice generator (1 -6) ${oneLineRandom}
  `);
const displayRandomNumber = document.querySelector(".random + p");
displayRandomNumber.appendChild(randomNumber);
