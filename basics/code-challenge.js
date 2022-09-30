//Array of objects and has to sort based on a particular field and if two records are equal then order them based on another property in the object.
let shirts = [
  {
    "size": "large",
    "color": "blue",
    "style": "polo"
  },
  {
    "size": "small",
    "color": "blue",
    "style": "polo"
  },
  {
    "size": "large",
    "color": "red",
    "style": "t-shirt"
  },
  {
    "size": "small",
    "color": "red",
    "style": "t-shirt"
  },
  {
    "size": "large",
    "color": "green",
    "style": "t-shirt"
  },
]

let shirtNew = {
  "size": "large",
  "color": "orange",
  "style": "t-shirt"
}

shirts.push(shirtNew);

console.log(shirts);

let redShirts = shirts.filter((shirt) => shirt.color === "red");
console.log(redShirts);

let vals = [
  { x: 2, y: 10 },
  { x: 5, y: 6 },
];

function compare(a, b) {
  return b.y - a.y;
}

console.log(vals);
vals.sort(compare);
console.log(vals);

// split up sentance

let s = "It was a dark and stormy night.";
let words = s.split(/\W+/).filter(word => word.length > 2);
console.log(words);
// sort to show longer words at end
words.sort((a, b) => a.length - b.length);
console.log(words);

//Write a function that takes input of arrays and loops over them to calculate return values based on some criteria. For example, take this array  [['oranges', 1], ['apples', 2], ['grapes', 7]]. Based on this array return total costs if second array property is a quantity and product is first array item. If say Oranges cost $5, and user buys the quantity of 2 or more, apply a 20% discount etc.. Return total cost from array by adding them all up.

let checkoutItems = [
  ["shoes", 88.54, 90],
  ["t-shirt", 16.99, 90],
  ["socks", 2.30, 90],
];

getDiscount = function() {
  const checkoutTotal = checkoutItems.map((x) => x[1]);
  let orderTotal = checkoutTotal.reduce((partialSum, a) => partialSum + a, 0);
  console.log("Total: " + orderTotal);

  discount = 20;

  afterDiscount = orderTotal - ((orderTotal * discount) / 100);
  console.log("After Discount: " + afterDiscount.toFixed(2));
}

getDiscount();


// checkoutItems.forEach(function (arrayItem) {
//   var x = arrayItem.prop1;
//   console.log(x);
// });


// map apply function to each item in an array
let newVals = [2, 6, 10, 30];

// function doubler(x) 
// {
//   return x * 2;
// }
//let doubled = newVals.map(doubler);
//console.log(doubled);
// converted to arrow funtion
console.log(newVals);
newVals = newVals.map(x => x * 2);
console.log(newVals);



// for loop might be faster
