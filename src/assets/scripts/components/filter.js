const nums = [1, 2, 3, 4, 5, 6, 7, 83, 91, 100];
const odds = nums.filter(n => n % 2 === 1)

const bigNums = nums.filter(n => n > 50)


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

const goodBooks = books.filter(b => b.rating > 4.3)

const fantasyFantasy = books.filter(book => (
  book.genres.includes('fantasy')
))

const shortForm = books.filter(book => (
  book.genres.includes('short stories') || book.genres.includes('essays') 
))
  
const query = 'Bone';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.toLowerCase().includes(query.toLowerCase())
})

const allGoodBooks = books.every(book => book.rating > 3.5);
const any2Authors = books.some(book => book.authors.length === 2);