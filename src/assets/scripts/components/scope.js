/**
function lol() {
  let person = "Tom";
  const age = "45";
  var color = "green"

  console.log(person) //undefined
}
// person is scoped to lol()
console.log(person) //undefined

function changeColor() {
  let color = 'purple'
  const age = 19
}

let bird = 'wren'
function birdWatch() {
  let bird = 'Robin'
  //bird is scoped to birdWatch()
}
 */
// Block scope 

// if (true) {
//   const animal = "eel"
//   console.log(animal)
// }
// console.log(animal)

if (true) {
  var animal = "eel"
  console.log(animal)
}
console.log(animal)

let animals = ['grizzly bear', 'panda bear', 'brown bear', 'polar bear']


var i = 10;
for (var i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}

console.log(i) // i is set to length of last index if and conflicts if i is declared elsewhere.


function doubleArr(arr) {
  const results = []
  let double;
  for (let num of arr) {
    double = num * 2;
    results.push(double)
  }
  console.log(double)
  return results;
}

function outer() {
  let movie = 'Amadeus'
  function inner() { // no access to inner 
    let movie = 'Stripes'

    function extraInner() {
      //let movie = 'Cool Runnings'
      console.log(movie.toUpperCase())
    }
    extraInner();
  }
  inner(); // runs inner but without this we can not access
}