// making a map and tiles
const mymap = L.map('issMap').setView([0, 0], 3);

// Making a maker with a custom icon
const issIcon = L.icon({
  iconUrl: '64px-International_Space_Station.png',
  iconSize: [65, 40],
  iconAnchor: [32, 20]
});

// set default settings and call custom icon
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap)

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreeMap</a>'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution })

tiles.addTo(mymap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS() {
  const response = await fetch(api_url)
  const data = await response.json()
  const { latitude, longitude } = data;
  //L.marker([latitude, longitude]).addTo(mymap)
  marker.setLatLng([latitude, longitude])

  document.getElementById('lat').textContent = latitude;
  document.getElementById('long').textContent = longitude;
}

//let newLoc;

function changeLocation() {
  setInterval(getISS, 10000)
}
getISS();
//changeLocation();


