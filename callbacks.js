
// setTimeout(function () {
//   alert("Timeout");
// }, 5000);

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  alert("I said do not click");
})

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
numbers.forEach(function (num, idx) {
  console.log(idx, num)
})

function printTriple(n) {
  console.log(n * 3);
}

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

books.forEach(function (book) {
  console.log(book.title.toUpperCase())
})

