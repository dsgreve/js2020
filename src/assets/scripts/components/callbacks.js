
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

// MAP creates a new array with the results of calling a callback on every element
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
  return t.toUpperCase();
})
console.log(texts);
console.log(caps);

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
})

const abbrvs = texts.map(function (text) {
  return text.toUpperCase().split('').join('.')
})

const bookTitle = books.map(function (b) {
  return b.title
})

// ARROW FUNCTIONS
// arrow function if only one param you can leave paratheses off
// if no arguements you need to add empty parathes
const squareOne = function (x) {
  return x * x;
}

const squareTwo = x => {
  return x * x;
}
const isEven = num => {
  return num % 2 === 0;
}

const multiply = (x, y) => {
  return x * y
}


const square = n => n * n;

// promises
const btn = document.querySelector('button');
// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`
//   }, 1000)
//   setTimeout(() => {
//     btn.style.transform = `translateX(300px)`
//   }, 1000)
//   setTimeout(() => {
//     btn.style.transform = `translateX(400px)`
//   }, 1000)
// }, 1000)

const moveX = (element, amount, delay, callback) => {
  const bodyBoundry = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currLeft = element.getBoundingClientRect().left;
  if (elRight + amount > bodyBoundry) {
    console.log("Done")
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      if (callback) callback();
    }, delay)
  }

}

moveX(btn, 100, 2000, () => {
  moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000, () => {
      moveX(btn, 100, 1000, () => {
        moveX(btn, 800)
      })
    })
  });
})

// success or failure callback