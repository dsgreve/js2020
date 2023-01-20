function Slider(slider) {
    if (!(slider instanceof Element)) throw new Error("No Slider passed in");
    // create variables for working with slider
    // create function in top level so it is accessible in multple functions
    let current;
    let prev;
    let next;
    // select elements needed for the slider
    const slides = slider.querySelector(".slides");
    const prevButton = document.querySelector(".goToPrev");
    const nextButton = document.querySelector(".goToNext");
    function startSlider() {
        current = slider.querySelector(".current") || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
        console.log(prev);
    }
    // when this slider is created, run the start slider function i.e. constructor
    startSlider();
    function move() {}
    function applyClasses() {}
}
const mySlider = Slider(document.querySelector(".slider"));
const dogSlider = Slider(document.querySelector(".dog-slider"));

//# sourceMappingURL=index.579125c3.js.map
