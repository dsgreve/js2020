const { hash } = window.location;
const message = atob(hash.replace('#',''));

if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');

  document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-link').classList.remove('hide');

  const inputMessage = document.querySelector('#input-message');
  
  
  const encrypted = btoa(inputMessage.value);

  const linkInput = document.querySelector('#input-link')
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();

});

