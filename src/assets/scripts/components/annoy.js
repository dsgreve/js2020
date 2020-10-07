const annoyer = {
  phrases: ["Literally", "cray, cray", "I can't even", "Totes!", "YOLO", "#riseAndGrind"],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length)
    //console.log(phrases[idx])
    return phrases[idx]
  },
  start() {
    
    console.log(this.pickPhrase());
    this.timerId = setInterval(() => {
      // console.log(that.pickPhrase())this is a window object because the setInterval function call it so we had to set That = to this   (const that = this;)
      console.log(this.pickPhrase());
      document.querySelector("h1").innerText = this.pickPhrase();
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log("Thanks")
  }
}


annoyer.start();
annoyer.stop();

