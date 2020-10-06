// Higher order functions - Functions that operate on/with other functions.  They can: Accept other functions as arguements return a function


// functions as arguements
// pass in cry it will run 3 times
function callThrice(func) {
  func();
  func();
  func();
}
// cry is a function
function cry() {
  console.log("Boo Hooo I'm sad")
}
function laugh() {
  console.log("Hahhahahahah")
}
function rage() {
  console.log("ARRRRRRG")
}

//callTwice(laugh)

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action()
  }
}

export default repeatNTimes;

//repeatNTimes(cry, 50)

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand)
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

function multiplyBy(num) {
  return function (x) {
    return x * num;
  }
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);




function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  }
}

const isChild = makeBetweenFunc(0, 18);

const isNineties = makeBetweenFunc(1990, 2000);

const isNiceWeather = makeBetweenFunc(65, 84);