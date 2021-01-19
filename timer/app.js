
class Timer {
  // constructor is a special method called autimatticaly there is na new isntance of Timer
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    // timer invoked on start button
    this.startButton.addEventListener('click', this.start);

    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    // runs imediately
    this.tick();
    // runs after 1 second
    this.intervalId = setInterval(this.tick, 1000);
  }

  pause = () => {
    clearInterval(this.intervalId);
  }

  tick = () => {
    // get value string and turn into number 
    //parseFloat supports decimals parseInt does not
    this.timeRemaining = this.timeRemaining - 1;
  }
  // getter keyword - doesn't requiring () so it looks like a instance variable
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // setter
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
// timer is invoked on page load
//timer.start();