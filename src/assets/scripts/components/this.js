function sayHi() {
  console.log("Hi");
  console.log(this);
}
sayHi();

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cherr',
  fullName() {
    // In a method, this refers to the opbject the method lives in
    const { first, last, nickName } = this;
    return(`${first} ${last} AKA ${nickName}`) 
    //console.log(`${this.first} ${this.last} AKA ${this.nickName}`) // allows us to reference contents of object its in
  },
  printBio() {
    console.log(this)
    const fullName = this.fullName();
    console.log(`${this.fullName()} is an actress and singer.`)
    
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says Hahahahaha`)
  }
}
person.laugh();

const printBio = person.printBio
person.printBio(printBio)

// invocation context changes the value this
// When we write an arrow function, they do not get their own version of this
// arrow functions are generally not used as methods in objects

