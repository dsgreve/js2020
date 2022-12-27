// closure - a variable in a function can be used in a child function
// use it on the page
function Gallery(gallery) {
  if(!gallery) {
    throw new Error('No Gallery Found');
  }
  // select elements needed
  console.log(gallery.firstElementChild);
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;
  
  function openModal() {
    console.info('Opening Modal...');
    // check if modal is already open
    if(modal.matches('.open')) {
      console.info('Modal is already open');
      return; // stop function from running
    }
    modal.classList.add('open');
    // Event listeners to be bound when we open the modal
    window.addEventListener("keyup", handleKeyUp);
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
  }

  function closeModal() { 
    modal.classList.remove('open');
    // TODO - add events for clicks and keyboard
    window.addEventListener("keyup", handleKeyUp);
    nextButton.addEventListener("click", showNextImage);
    // turn off eventlisteners when modal is closed to prevent it from running when not on page
    window.removeEventListener("keyup", handleKeyUp);
    nextButton.removeEventListener("click", showNextImage);
    prevButton.removeEventListener("click", showPrevImage);

  }

  function handleClickOustside(e) {
    // if what is clicked is what we are listening for in eventListener then true
    // lets us know that they are clicking the modal and not innermodal
    if(e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    console.log(e)
    // adding return will stop other keyup events from running once condition is met
    if(e.key === 'Escape') return closeModal();
    if (e.key === "ArrowRight") return showNextImage();
    if (e.key === "ArrowLeft") return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if(!el) {
      console.info('no image to show');
      return;
    }

    // update modal with info
    console.log(el)
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();

  }
  // moved into eventlistener
  // function handImageClick(event) {
  //   showImage(event.currentTarget);
  // }
  
  // Event listeners
  images.forEach(image => image.addEventListener('click', (e) => showImage(e.currentTarget))
  );

  modal.addEventListener('click', handleClickOustside);
  
  images.forEach(image => {
    image.addEventListener('keyup', e => {
      if(e.key === 'Enter') {
        showImage(e.currentTarget); 
      }
    })
  })

}

const gallery1 = Gallery(document.querySelector('.gallery1'))
const gallery2 = Gallery(document.querySelector('.gallery2'))
