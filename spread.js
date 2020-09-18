// default parameters, in example y = 1 if no y is passed in

function multiply(x, y = 1) {
  return x * y;
}

const greet = (person, greeting = 'hi') => {
  console.log(`${greeting}, ${person}!`)
}

// spreaks , item is iterated over and split into its own itme
function giveMeFour(a, b, c, d, e) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
  console.log('e', e)
}

const colors = ['red', 'orange', 'green', 'peach', 'yellow']
//giveMeFour(colors) vs giveMeFour(...colors)

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

// combine two arrays in a new array
const mollusca = [...cephalopods, ...gastropods]
const molluscaTwo = ['garden slug', ...gastropods, ...cephalopods]
const inverts = [...cephalopods, ...gastropods, ...cnidaria]

const alpha = "abcdefgh".split('')
const alphaTwo = [...'abcdefgh']

// create copies or combinations of obect literals

const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
}

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}

// conflicting info that is the same key will be overwritten, order matters
const catDog = {
  ...canine,
  ...feline
}

const tripod = {
  ...canine,
  legs: 3
}
// catDogClone is a unique obect so catDog === catDogClone is false
const catDogClone = {
  ...catDog
}
// nested array, object, object still behaves as object
const random = [...'hello', { ...catDog }]