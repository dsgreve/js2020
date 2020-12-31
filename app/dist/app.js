
// const checkStatusAndParse = (res) => {
//  if (!res.ok)
//    // promise return will not reget on 404 or 500 only on network failure use if to test response
//    throw new Error(`Status Code Error: ${res.status}`);

//  return res.json();
// }

// const printPlanets = (data) => {
//   console.log("Loaded 10 planets");
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next)
// }

// const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
//   return fetch(url);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log("Somehting Went wrong with Fetch!!!!");
//     console.log(err);
//   });


//Axios will reject 404 errors where Fetch will not
//Axios no worries about parsing or checking status code

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url)
}

const printPlanets = ({data}) => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next)
}

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log(err);
  });