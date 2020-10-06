let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
  "Mister America"
]

const movie = movies.find(movie => {
  return movie.includes('Mr');
})

const movie2 = movies.find(m => (
  m.indexOf("Mr") === 0
))

const books = [
  {
    title: 'Good Omens',
    author: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.42
  },
  {
    title: 'Bone: Complete Edition',
    author: 'Jeff Smith',
    rating: 4.12
  },
  {
    title: 'American Gods',
    author: 'Neil Gaiman',
    rating: 4.48
  },
  {
    title: 'A Gentleman in Moscow',
    author: 'Amor Towles',
    rating: 4.48
  }
]

const goodBook = books.find(b => b.rating >= 4.4);

const neilBook = books.find(b => b.author.includes('Neil Gaiman'));


const titleBook = books.find(b => b.title.includes('American'));

