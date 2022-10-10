const p = document.querySelector('p');
const imgs = document.querySelector('.item img');
const heading = document.querySelector('h2');
console.log(p);
console.dir(heading);
//heading.innerText = "Scott is VERY cool"
heading.style.fontSize = "2.25rem"
console.log(heading.innerText);
console.log(heading.textContent);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

//pizzaList.textContent = `${pizzaList.textContent} 🍕` ;
pizzaList.insertAdjacentText("beforeend",'🍕🍕🍕🍕');
pizzaList.insertAdjacentText("afterbegin",'🍕🍕🍕🍕');
console.log(pizzaList.textContent);
const pic = document.querySelector('.nice');

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
pic.classList.remove('cool');
console.log(pic.classList);

//pic.alt = 'random picture';
pic.width = 350;
pic.addEventListener('load', function() {
  console.log(pic.naturalWidth);
})

pic.setAttribute('alt', 'Really something random');
console.log(pic.getAttribute('alt'))
console.log(pic.naturalWidth);

const custom = document.querySelector('.custom');
console.log(custom.dataset.name);

custom.addEventListener('click', function(){
  alert(`Welcome ${custom.dataset.name}`);
});
