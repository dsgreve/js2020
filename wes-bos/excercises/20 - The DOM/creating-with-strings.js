const item = document.querySelector('.item');
//console.log(item.innerHTML);
const src = "https://source.unsplash.com/random/380x300";
const desc = `A really nice photo" />`;
// example of xss flaw ->const desc = `A really nice photo <img src='https://source.unsplash.com/random/380x300' onload="alert('HACKED');" />`;
const myHtml = `
  <div className="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}" />
  </div>
  `;
// adds as string so limits the ability to manipulate
item.innerHTML = myHtml;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHtml);

document.body.appendChild(myFragment);
console.log(myFragment.querySelector('img'));

// security issues
// Allows for HTML to be added so if the db wasn't sanatized it could cause havoc.

// xss - cross site scripting
// adding script tags to fields
// scrub html of any scripts