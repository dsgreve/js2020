const wes = document.querySelector('.wes');
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.childNodes);

// remove method
wes.previousElementSibling.remove();


const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p);


// A Node vs element a node can be an element
// and element can't be a node

// these do not ignore text nodes
/**
 * 
 el.childNodes;
el.firstChild;
el.lastChild;
el.previousSibling;
el.nextSibling;
el.parentNode;

 */

