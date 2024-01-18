export default class InputHandler {
  constructor() {
    this.lastKey = '';
    window.addEventListener('keydown', (e) => {
      switch(e.key) {
        case "ArrowDown":
          this.lastKey = "RELEASE down";
          break;
        case "ArrowUp":
          this.lastKey = "RELEASE up";
          break
      }
    })
    window.addEventListener('keyup', (e) => {
      switch(e.key) {
        case "ArrowDown":
          this.lastKey = "PRESS down";
          break;
        case "ArrowUp":
          this.lastKey = "PRESS up";
          break
      }
    })
  }
}