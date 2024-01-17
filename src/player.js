import { UpMovement } from "./state.js";

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = new Image();
    this.image.src = '../img/aircrafts-01.png';
    this.width = 100;
    this.height = 68;
    this.x = 0;
    this.y = 0;
    this.speed = 1;
  }
  draw(context) {
    context.drawImage(this.image, 0, 0, this.width, this.height);
  }
  update(input) {
    if (input === "PRESS down") this.y -= this.speed;
    // console.log(input);
  }
}