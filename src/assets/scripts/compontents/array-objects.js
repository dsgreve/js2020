const shoppingLists = ['cereal', 'cheese', 'ice', 'soup']
const colors = ['blue', 'green', 'yellow', 'green']

// shoppingLists[shoppingLists.length] = 'peanuts' same as shoppingLists.push('peanuts')

const topSongs = [
  'First Time Ever I Saw Your Face',
  'Purple Rain',
  'Pictures of You',
  'Shake Your Rump'
]

// topSongs.push('Egg Raid') add to end
topSongs.pop() // removes last item and returns it

const dishesToDo = ['Big Platter']

dishesToDo.unshift('Small Plate') // adds item to begining of array
dishesToDo.unshift('Small Soon', 'Large Spoon') // adds item to begining of array in order of arguements
dishesToDo.shift() // removes and returns 1st item in array

// concat
const fruits = ['apple', 'bananna', 'blueberry', 'strawberry', 'orange']
const veggies = ['celery', 'corn']

console.log(fruits.concat(veggies))
if (fruits.includes('bananna')) {
  console.log('not allergy friendly')
} else {
  console.log('safe to eat')
}

fruits.indexOf('orange')
console.log(fruits.reverse())
console.log(fruits.reverse())
console.log(fruits.join(' => '))

const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortaise']
const swimmers = animals.slice(0, 3)
const mammals = animals.slice(2, 4)
const reptiles = animals.slice(4)
const quadruped = animals.slice(-3)

console.log(swimmers)
console.log(mammals)
console.log(reptiles)
console.log(quadruped)
animals.splice(1, 0, 'octopus')
console.log(animals)

// Insert with Splice
const food = ['carrot', 'onion', 'brocolli', 'corn', 'peas', 'lettuce']
// at index 1, delete 0 items and insert rice
food.splice(1, 0, 'rice')
console.log(food)

// delete with splice
// delete 2 items at index 5
food.splice(5, 2)
console.log(food)

// replace with splice
// at index 3 delete 2 items and replace with 'tofu' and 'beans'
food.splice(3, 2, 'tofu', 'beans')
console.log(food)

const palette = {
  red: '#eb4d4bn',
  yellow: '#f9ca24',
  blue: '#30336b'
}

const palette2 = palette
palette2.green = '#ebf876'

console.log(palette)

const nums = [1, 2, 3]
const mystery = [1, 2, 3]
// these do not the same because of how javascript holds the numbers in memory in a different location

const moreNums = nums
// these do match because moreNums is referring to the same array in memory

const user = {
  username: 'CherryGarcia8',
  email: 'garcia@gmail.com',
  notifications: []
}
// this will not work because the empty array is in a different memory location
// comparisons check for equality of reference not equality of contents
if (user.notifications === []) {
  console.log('No Notifications')
}
if (!user.notifications.length) {
  console.log('No New Notifications')
}
