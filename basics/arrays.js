

let fruits = [
  'apples', 
  'banannas',
  'kiwi',
  'orange'
]

let veggies = [
  'carrots', 
  'brocoli',
  'corn',
  'spinach'
]

//concat
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));
//shoppingList.push(['beer', 'wine']);

if(veggies.includes('corn')) {
  console.log('corn in on the list')
} else {
  console.log('You forgot the corn!')
}

console.log(fruits.indexOf('kiwi'));

//replace item in array
const corn = veggies.indexOf('corn');
if (corn !== -1) {
  veggies[corn] = "corn dog";
}

console.log(veggies);

//test array
let shoppingList = [
  'eggs', 
  'cheese',
  'milk',
  'cereal',
  'bread',
  'oranges',
  'tea'
];


// slice creates array from index note: up to but not including second number arguement
let dairy = shoppingList.slice(0,3);
console.log('dairy items: ' + dairy)
//splice replace and/or insert splice(index, items to remove, items)
shoppingList.splice(2, 0, "Cottage Cheese");
shoppingList.splice(0, 2, "Eggs", "Cheeze");
console.log("splice " + shoppingList);

let shoppingListItems = shoppingList.length;
const randomItem = Math.floor(Math.random() * shoppingListItems);


console.log(shoppingList[randomItem] + " " + shoppingList);
console.log(shoppingList.length);
const lastItem = shoppingList.pop();
const firstItem = shoppingList.shift();
const firstFirstItem = shoppingList.unshift('coffee');
console.log(firstItem);
console.log(lastItem);
console.log(shoppingList);

let lotto = [12,14,16,18,48];


const displayArray = document.querySelector(".array + p");

//reverse an array
let letters = [
  "h",
  "e",
  "l",
  "l",
  "0",
]

console.log(letters);
console.log(letters);

console.log(letters);

// join array into a string
let elements = ['earth', 'wind', 'fire']
console.log(elements.join(' '))


let games = ["Othello", "Bridge", "Cribbage", "Monopoly", "Guess Who"];
games.sort();
console.log('Games: ' + games);

// sort is only available for strings
let nums = [23, 18, 31, 6, 140, 86];
nums.sort();
console.log('Numbers: ' + nums)