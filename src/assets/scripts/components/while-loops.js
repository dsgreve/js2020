
// While Loops = while some condition is true
// not good practice to create a variable outside of the while loop
// A while loop excels when you do not know how many loops may be needed. Example would be run until game is over
// let j = 0
// while (j <= 5) {
//   console.log('num = ' + j)
//   j++
// }

// The while statement will run while info is true and needs a statement to break out of the loop otherwise you run into a chance of an infinate loop

// while (some condition)
// in the loop, update or attempt to make that condition false

/* Number Guess Game
const target = Math.floor(Math.random() * 100)
let guess = Math.floor(Math.random() * 100)

while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`)
  guess = Math.floor(Math.random() * 100) // updates exisiting guess with new guess
}
console.log(`Target: ${target} Guess: ${guess}`)
console.log('Congrats You Win!!!!')
 */

/* number guess game except a break is used */
// a break statement terminates the current loop "Breaks out of", switch, or label statement and transfers program control to the statement following the terminated statement.  If its in a nested loop it will only break out of the loop its in.
const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while (true) {
  if (target === guess) break
  guess = Math.floor(Math.random() * 10)
  console.log(guess)
}
console.log(`${guess} = ${target}`)
