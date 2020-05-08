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