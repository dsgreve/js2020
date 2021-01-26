class Timer {
  // constructor is a special method called autimatticaly there is na new isntance of Timer
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      // reference onstart method
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    // timer invoked on start button
    this.startButton.addEventListener('click', this.start);

    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    // runs imediately
    this.tick();
    // runs after 1 second
    this.intervalId = setInterval(this.tick, 1000);
  }

  pause = () => {
    clearInterval(this.intervalId);
    
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      if (this.onComplete) {
        this.onComplete();
      }
      this.pause();
    } else {
      // get value string and turn into number 
      //parseFloat supports decimals parseInt does not
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
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