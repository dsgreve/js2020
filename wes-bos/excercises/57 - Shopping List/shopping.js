// listen for someone typing and hits submit
// keep track of items
// list out 
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list')


// array to hold our state 
// state means when you have a bunch of data that reflects state of application
// state contains list of items and ids of each item , given the state should be reflected i
const items = []

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  console.log(name);
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  //console.log(`There are now ${items.length} in your state`);
  // clear form
  e.target.reset();
  displayItems();
}

function displayItems() {
  console.log(items)
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button>&times;</button>
    </li>`
    )
    .join("");
  list.innerHTML = html;
} 



shoppingForm.addEventListener("submit", handleSubmit);