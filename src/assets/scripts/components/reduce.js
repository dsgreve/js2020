// Reduce - executes a reducer function on each element of the array, resulting in a single value
// Example - tally data or find largest item

const nums = [3, 5, 7, 9, 11];
const product = nums.reduce((total, currentVal) => {
  return total * currentVal;
})

const grades = [87, 64, 94, 92, 88, 99, 73, 70, 64, 66];

const maxGrade = grades.reduce((max, currentVal) => {
  return Math.max(max, currentVal)
  // if (max > currentVal) return currentVal;
  // return max;
})

const minGrade = grades.reduce((min, currentVal) => {
  return Math.min(min, currentVal)
})

const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
  return sum + currVal;
}, 1000)

//use Reduce to tally results
const votes = ['y', 'y', 'n', 'y', 'y', 'absent', 'n', 'y', 'y', 'y', 'n', 'n', 'y'];

const results = votes.reduce((tally, val) => {
  if (tally[val]) {
    tally[val]++
  } else {
    tally[val] = 1;
  }
  return tally;
}, {})

// {}
// {y: 1}
// {y: 2}
// {n: 1}

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
  title: 'A Truly Horrible Book',
  authors: ['Xavier Time'],
  rating: 2.16,
  genres: ['fiction', 'trash']
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

const booklist = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book)
  return groupedBooks;
}, {})