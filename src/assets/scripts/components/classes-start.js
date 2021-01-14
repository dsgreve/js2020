// intro to OOP 

// convert RGB Color to Hex
// factory function
// two functions 
// function hex(r,g,b) {
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) +b ).toString(16).slice(1)
// }
// function rgb(r,g,b) {
//   return `rgb(${r}, ${g}, ${b})`;
// }

// // factory function
// function makeColor(r,g,b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function() {
//     console.log(this);
//     const{r,g,b} = this
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   color.hex = function() {
//     const{r,g,b} = this
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) +b ).toString(16).slice(1)
//   }
//   return color
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.rgb();
// firstColor.hex();


// function Color(r,g,b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
// }

// Color.prototype.rgb = function() {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.hex = function() {
//   const{r,g,b} = this
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) +b ).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a=1) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// Javascript class
class Color {
  // will execute whenever a new 
  constructor(r, g, b, name) {
    this.r = r; // refers to new object and sets this to this of object
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const {r,g,b} = this;
    return `${r},${g},${b}`
  }
  rgb() {
    return `rgb(${this.innerRGB()})`
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`
  }
  hex() {
    const {r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) +b ).toString(16).slice(1)
  }
}

// new operator is used
// if you use the New keywork 'this' refers to the individual object
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

// color1.hex();

// convert to hsl 


// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************
function initializeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit
      })
    }
  }
  return deck;
}

function drawCard(deck, drawnCards) {
  const card = deck.pop();
  drawnCards.push(card);
  return card;
}

function drawMultiple(numCards, deck, drawnCards) {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    cards.push(drawCard(deck, drawnCards));
  }
  return cards;
}

function shuffle(deck) {
  // loop over array backwards
  for (let i = deck.length - 1; i > 0; i--) {
    //pick random index before current element
    let j = Math.floor(Math.random() * (i + 1));
    //swap
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}


// We have to create a bunch of variables:
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
// We have to pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);







const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
      const {
        suits,
        values,
        deck
      } = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
            value,
            suit
          })
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numCards) {
      const cards = [];
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const {
        deck
      } = this;
      // loop over array backwards
      for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  }

}

// Much cleaner!!
const myDeck = makeDeck();

myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

const deck2 = makeDeck();
deck2.initializeDeck();