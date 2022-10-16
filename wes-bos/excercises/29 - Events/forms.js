const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e){
const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry No Chads');
    e.preventDefault();
  }
});

function logEvent(event) {
 console.log(event.type);
 console.log(event.currentTarget.value);
}

signup.name.addEventListener("keyup", logEvent);
signup.name.addEventListener("keydown", logEvent);
signup.name.addEventListener("focus", logEvent);
signup.name.addEventListener("blur", logEvent);

const email = document.querySelector('input[type="email"]');
email.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});
email.addEventListener("blur", (event) => {
  event.target.style.background = "";
});


const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
  console.log(event.type);
  if(event.type === 'click' || event.key === 'Enter')
  console.log("Photo Clicked");
}

photo.addEventListener(['keyup', 'click'], handlePhotoClick);