// OBJECT LITERALS, store key/value pairs
// central to js

//Shorthand properties

// before shorthand
// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

// shorthand creates key/value 
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg
  }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews)

//COMPUTED PROPERTIES , add an object with a dynamic key
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'Wes Anderson'

//Old way
// const team = {}
// team[role] = person;
// team[role2] = person2;

// properties are in the object when created
const team = {
  [role]: person,
  [role2]: person2
}

//old way without computed properties
// function addProp(obj, k, v) {
//   const copy = { ...obj };
//   copy[k] = v;
//   return copy;
// }

// // computed properties
// const addProp(obj, k, v) => {
//   return{...obj, [k]:v}
// }
// const res = addProp(team, 'happy', ':)')

//Methods// We cam add function as properties on objects -> methods

// const add = function (x,y) {
//   return x + y
// }

const math = {
  numbers: [1, 2, 3, 4, 5, 6, 7],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  }
}

// Add Method to function shorthand

const auth = {
  userName: 'TommyBoy',
  login() {
    console.log('Logged you in!')
  },
  logout() {
    console.log("Logged you out!")
  }
}