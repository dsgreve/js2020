//** XMLHttpRequest */

// from MDN
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();

// function reqLister() {
//   console.log(this.responseText)
// }

const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', function() {
  console.log('FIRST REQUEST!!!!');
  // convert JSON to JS Object
  const data =  JSON.parse(this.responseText);
  const filmURL = data.results[0].films[0];
  const filmRequest = new XMLHttpRequest();

  filmRequest.addEventListener('load', function(){
    console.log("SECOND REQUEST WORKED")
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  })
  filmRequest.addEventListener('error', function(e){
    console.log("ERROR", e);
  })

  filmRequest.open("GET", filmURL);
  filmRequest.send();

  // for(let planet of data.results){
  //   console.log(planet.name);
  // }
})
firstReq.addEventListener('error', ()=> {
  console.log('ERROR!!!');
})

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!");
