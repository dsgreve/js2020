// extend classes to other classes. If a class is extended it gets constructor.
// Pet is base class
class Pet {
  constructor(name, age) {
    console.log('IN Pet CONTSTRUCTOR');
    this.name = name;
    this.age = age;
  }
  //eat method
  eat() {
    return `${this.name} is eating!`;
  }
}
class Cat extends Pet{
  // use constructor to add additional data
  constructor(name, age, livesLeft = 9) {
    console.log('IN Cat CONTSTRUCTOR');
    super(name, age); // super calls constructer from Pet
    this.livesLeft = livesLeft;
  }
  meow() {
    return `${this.name} is meowwing`;
  }
}

class Dog extends Pet {
  bark() {
    return `${this.name} is barking!`;
  }
}