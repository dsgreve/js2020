// global variables

const age = 100;

function go() {
  const hair = 'blonde';
  console.log(hair);
  // if variable is not available in scope it will go up a level and get global
  // const age = 200; would be bad practice aka shadow scope 
  console.log(age);
}
go();
// would not run here because it is function   scoped console.log(hair);
console.log(age);

// create as a global
function isCool(name) {
  let cool;
  if (name === 'Wes') {
    cool = true;
  } else {
    cool = false;
  }
  console.log(cool);
  return cool;
}
isCool('Scott');

for (let i = 1; i < 10; i++) {
  console.log(i);
}

const dog = "snickers";
function logDog() {
  console.log(dog);
}

function stay() {
  const dog = 'sunny';
  logDog();
}

stay();


