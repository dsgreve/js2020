// fuctions take in data - arguement
// return a value

//scrollTo({top: 10, left: 0, behavior: 'smooth'});

// function Definition  
// function calculateBill() {
//   const total = 100 * 1.06;
//   // temporary function only available in function when ran
//   return total;
// }

// rewritten 
function calculateBill(billAmount, taxRate = 0.6, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
// function call
// capture function return

// you can pass value directly or through a variable
const scottTotal = 180.32;
billTotal = calculateBill(billAmount = 116, undefined, undefined);
console.log(`Your total is $${billTotal}.`);

// you can interpolate and run the function
console.log(`Your total is $${calculateBill(100, 0.06, .2)}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}`
}


const greeting = sayHiTo('Jean');
console.log(greeting);

const myTotal3 = calculateBill(100 + 25.35, 0.15);
console.log(myTotal3);

// you can use the same the parameters in different functions because they are only scoped to their function

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Maverick') {
  return `HEY ${name.toUpperCase()}`
}

console.log(doctorize('Scott'));
console.log(yell(doctorize('Dale')));