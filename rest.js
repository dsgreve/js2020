// REST - almost opposite of Spread, it collects things down into a single array

// support unlimited amount of arguements

// old way
function sum() {
  const arrgsArr = [...arguments]
  return arrgsArr.reduce((total, currVal) => {
    return total + currVal
  })
}
// arguements combine all arguements into an object and are not available in arrow functions
function fullName(first, last) {
  console.log(arguments);
  console.log(first);
}

// REST replaces arguments object, collects all remaining arguemnts (ones that have not been matched into a paramter) into an array
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal
  })
}

function fullName(first, last, ...titles) {
  console.log('first', first)
  console.log('last', last)
  console.log('titles', titles)
}

const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)