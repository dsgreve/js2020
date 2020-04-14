// similar to if statements
// 3 pieces needed for loop 1. initial value - variable, 2. Condition When to run the loop, 3. How to change value each time
// for (let i = 1; i <= 10; i++) {
//   console.log('Hello World: ', i)
// }
/*
for (let i = 2; i <= 10; i += 2) {
  console.log('Hello World: ', i)
}

for (let num = 1; num <= 20; num++) {
  console.log(`${num} x ${num} = ${num * num}`)
}

for (let i = 200; i >= -200; i -= 25) {
  console.log(i)
}
*/
// AVOID INFINITE LOOPS --- MAKE SURE CONDITIONAL RESOLVES

// Loop through arrays
// const animals = ['lions', 'tigers', 'bears', 'chickens?'];

const examScores = [98, 77, 84, 91, 57, 66]
for (let i = 1; i < examScores.length; i++) {
  const score = examScores[i]
  console.log(score)
}

const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Artemis',
    grade: 97
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 90
  }
]

for (let i = 0; i < myStudents.length; i++) {
  const student = myStudents[i]
  // console.log(student)
  console.log(`${student.firstName} scored ${student.grade}`)
}
let total = 0
for (let i = 0; i < myStudents.length; i++) {
  const student = myStudents[i]
  total += student.grade
}

console.log(total / myStudents.length)

const word = 'stressed'
let reversedWord = ''
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i]
  console.log(reversedWord)
}
