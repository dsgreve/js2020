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
    const { first, last, nickName } = this;
    return(`${first} ${last} AKA ${nickName}`) 
    //console.log(`${this.first} ${this.last} AKA ${this.nickName}`) // allows us to reference contents of object its in
  },
  printBio() {
    console.log(`${this.fullName()} is an actress and singer.`)
  }
}

person.printBio()