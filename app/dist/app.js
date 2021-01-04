
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

// const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
//   return axios.get(url)
// }

// const printPlanets = ({data}) => {
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next)
// }

// fetchNextPlanets()
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log(err);
//   });

  //Async functions - ASYNC and WAIT
  // async is used in front of af function
  function getData() {
    const data = axios.get("https://swapi.dev/api/planets/").then(data => {
      console.log(data);
    })
    console.log(data);
  }

  // function great() {
  //   return "Helloooo!!!"
  // }

  //ASYNC Keyword wraps fuction in promise
  async function greet() {
    return "Helloooo!!!"
  }
  greet().then((val) => {
    console.log("Promise Resolved!!!")
  })

  async function add(x,y) {
    if(typeof x !== 'number'|| typeof y !== 'number') {
      throw 'X and y must be numbers'
    }
    return x + y;
  }

  add(10, 15).then(val => {
    console.log('Promise resolved with: ', val)
  }).catch(err => {
    console.log('Promise rejected with: ', err)
  })

  // // await keyword - runs code after async operation - can only be used in an async function
  // async function getPlanets() {
  //   return axios.get("https://swapi.dev/api/planets/");
  // }
 
  // getPlanets().then((res) => {
  //   console.log(res.data);
  // });

  // async function getPlanets() {
  //   const res = await axios.get("https://swapi.dev/api/planetz/");
  //   console.log(res.data); // only runs once previous line is ran
  // }

  // getPlanets().catch((err) => {
  //   console.log('IN CATCH!!!');
  //   console.log(err)
  // });

  async function getPlanets() {
    try {
      const res = await axios.get("https://swapi.dev/api/planets/");
      console.log(res.data); // only runs once previous line is ran
    } catch(e) {
      console.log('In Catch!!!')
      console.log(e)
    }
  }

  getPlanets()
  