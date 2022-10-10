const item = document.querySelector('.item');
console.log(item.innerHTML);
const src = "https://source.unsplash.com/random/380x300";
const desc = "A really nice photo";
const myHtml = `
  <div className="wrapper">
    <h2>Cute Photo</h2>
    <img src="${src}" alt="${desc}" />
  </div>
  `
item.innerHTML = myHtml;