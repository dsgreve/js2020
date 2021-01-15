
class Timer {
  // constructor is a special method called autimatticaly there is na new isntance of Timer
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    // timer invoked on start button
    this.startButton.addEventListener('click', this.start);
  }

  start = () => {
    console.log(this);
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
// timer is invoked on page load
timer.start();