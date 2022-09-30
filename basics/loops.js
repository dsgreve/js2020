//  for (let i = 1; i < 10; i++) {
//    console.log("Hello World ", i);
//  }

 for (let num = 1; num < 20; num++) {
   console.log(`${num}x${num} = ${num * num}`)
 }

//nested for loop
 for (let i = 1; i<=10; i++) {
   console.log(`Outer Loop: ${i}`);
   for (let j = 10;  j >= 0; j -= 2) {
     console.log(`   Inner Loop: ${j}`);
   }
 }

 const gamerBoard = [
   [4, 32, 8, 4],
   [10, 36, 18, 43],
   [2, 40, 17, 49],
 ]

 for (let i = 0; i < gamerBoard.length; i++) {
   let row = gamerBoard[i];
   console.log(row);
   for (let j = 0; j < row.length; j++) {
     console.log(row[j]);
   }
 }
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

let guessTry = 0;
while (guess !== target) {
  guess = Math.floor(Math.random() * 10);
  guessTry++;
  console.log(guess, target);
}

console.log(`Target: ${target} Guess: ${guess}.  Took ${guessTry} guesses!`);

// FOR OF
let sports = ['soccer', 'tennis', 'football', 'pickle ball']

for (let i = 0; i <= sports.length; i++) {
  console.log(sports[i]);
}

for (let sport of sports) {
  console.log(sport);
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

for(let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num; 
  }
  console.log(`${row} summed to ${sum}`);
}

//object is not iterable
const gameReview = {
  monopoly: 10,
  cribbage: 15,
  bridge: 2.5,
  poker: 8
}

for (let game of Object.keys(gameReview)) {
  console.log(game, gameReview[game]);
}

const ratings = Object.values(gameReview);
let total = 0;
for (let r of ratings) {
  total += r;
}
total /= ratings.length;
console.log(total)

const values = [2, 14, 24, 50];
const newValues = values.map(x, index) => {
  value + 2
}

console.log(values, newValues);
