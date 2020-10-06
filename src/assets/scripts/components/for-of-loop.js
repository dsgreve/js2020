// for.. of loops (not supported in IE)
// for (variable of iterable) {
//   statement
// }

const subreddits = ['soccer', 'hydrohomies', 'cringe', 'AMA', 'books']
/* standard for loop
for (let i = 0; i < subreddits.length; i++) {
  console.log(subreddits[i]);
} */

// iterate over each element in an array
for (const sub of subreddits) {
  console.log(sub)
}

// iterate each character in a string
for (const char of 'supercalifragilisticexpialidocious') {
  console.log(char.toUpperCase())
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]

for (let i = 0; i < magicSquare.length; i++) {
  const row = magicSquare[i]
  let sum = 0
  for (let j = 0; j < row.length; j++) {
    console.log(row[j] + ' ' + sum)
    sum += row[j]
  }
  console.log(`${row} summed to ${sum}`)
}

// for of cleans up code
for (const row of magicSquare) {
  let sum = 0
  for (const num of row) {
    sum += num
  }
  console.log(`${row} summed to ${sum}`)
}

const words1 = ['mail', 'milk', 'bath', 'black']
const words2 = ['box', 'shake', 'tub', 'berry']
// standard for loop is best here because you need the index to match order
for (let i = 0; i < words1.length; i++) {
  console.log(`${words1[i]}${words2[i]}`)
}

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 7,
  'Little Miss Sunshine': 8.5,
  Coraline: 9
}
/* for and for of loops work with iterable items like arrays and strings.  An Object is not iterable.
This will not work
for (const x of movieReviews) {
  console.log(x)
}
*/

// To use for loops with it requires the use of Object.keys and/or Object.values

for (const movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie])
}

const ratings = Object.values(movieReviews)
let total = 0
for (const r of ratings) {
  total += r
}
const avg = total /= ratings.length
console.log(avg)

/* FOR...IN - use to loop over keys in an object */

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000
}

let totalWinnings = 0
for (const prop in jeopardyWinnings) {
  totalWinnings += jeopardyWinnings[prop]
  console.log(prop)
}

console.log(`Ken Jennings Total Earnings: ${totalWinnings}`)

// will display key of array, the order is noted to be arbitrary so its not best to use for arrays
for (const k in [88, 99, 77, 66]) {
  console.log(k)
}
