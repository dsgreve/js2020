//** XMLHttpRequest */

// from MDN
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();

// function reqLister() {
//   console.log(this.responseText)
// }

// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener('load', function() {
//   console.log('FIRST REQUEST!!!!');
//   // convert JSON to JS Object
//   const data =  JSON.parse(this.responseText);
//   const filmURL = data.results[0].films[0];
//   const filmRequest = new XMLHttpRequest();

//   filmRequest.addEventListener('load', function(){
//     console.log("SECOND REQUEST WORKED")
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData);
//   })
//   filmRequest.addEventListener('error', function(e){
//     console.log("ERROR", e);
//   })

//   filmRequest.open("GET", filmURL);
//   filmRequest.send();

//   // for(let planet of data.results){
//   //   console.log(planet.name);
//   // }
// })
// firstReq.addEventListener('error', ()=> {
//   console.log('ERROR!!!');
// })

// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("Request Sent!");

// fetch("https://swapi.dev/api/planets/")

// .then((response) => {
//   if (!response.ok)
//     // promise return will not reget on 404 or 500 only on network failure use if to test response
//     throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     const filmUrl = data.results[0].films[0];
//     return fetch(filmUrl)
//   })
//   .then((response) => {
//   if (!response.ok)
//     // promise return will not reget on 404 or 500 only on network failure use if to test response
//     throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   })
//   .then(data => {
//     console.log(data.title);
//   })

// .catch((err) => {
//   console.log("Somehting Went wrong with Fetch!!!!");
//   console.log(err);
// });

// move check and parse into a function
const checkStatusAndParse = (res) => {
  if (!res.ok)
    // promise return will not reget on 404 or 500 only on network failure use if to test response
    throw new Error(`Status Code Error: ${res.status}`);

  return res.json();
};

const printPlanets = (data) => {
  console.log("Loaded 10 planets");
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log("Somehting Went wrong with Fetch!!!!");
    console.log(err);
  });
