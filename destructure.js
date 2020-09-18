// destructuring clean syntax to 'unpack' Values from Arrays, Properties from objects into distinct variables. silimar to spread

// destructuring array
const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
]
/** Pre destructor way
const gold = raceResults[0]
const silver = raceResults[1]
const bronze = raceResults[2] 
*/
// crate variabales for first 2 indexes
const [gold, silver, bronze] = raceResults;
const [first, , , fourth] = raceResults;
const [winner, ...others] = raceResults;

// destructuring objects
const runner = {
  firstName: "Eliud",
  lastName: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of Golden Heart of Kenya"
}

//const { firstName, lastName, ...other } = runner;
// get and change variable
const { country: nation } = runner;
const results = [{
  firstName: "Eliud",
  lastName: "Kipchoge",
  country: "Kenya"
},
{
  firstName: "Feyisa",
  lastName: "Lelisa",
  country: "Ethiopia"
},
{
  firstName: "Galen",
  lastName: "Rupp",
  country: "United States"
}]
const [{ firstName: goldWinner }, { country }] = results;

// function print(person) {
//   const { firstName, lastName, title } = person;
//   console.log(`${firstName} ${lastName}, ${title}`)
// }
function print({ firstName, lastName, title }) {
  console.log(`${firstName} ${lastName}, ${title}`)
}

const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json'
]

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`)
}