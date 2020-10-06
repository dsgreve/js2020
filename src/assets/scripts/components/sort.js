// Every Method - every item in array must pass test 
const words = ["dog", "dig", "bag", "log"];

const all3lets = words.every(word => word.length === 2);
const allEndInG = words.every(word => {
  const last = word.length - 1;
  return word[last] === 'g'
});

// Some method - at least one item in array must pass test

const someStartWithD = words.some(word => word[0] === 'd');
const allStartWithD = words.every(word => word[0] === 'd');


// to use the Sort method on numbers you need to pass in an arguement and compareFunc 
const prices = [400.5, 3000, 99.9, 35.99, 12.00, 9500];

// using slice() creates a new array instead of mutating the original
const ascSort1 = prices.slice().sort((a, b) => a - b);
const descSort1 = prices.slice().sort((a, b) => b - a);

const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]
// sort by rating number
books.sort((a, b) => b.rating - a.rating);