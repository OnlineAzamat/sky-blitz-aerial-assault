export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = new Image();
    this.image.src = '/img/re-aircrafts-01.png';
    this.width = 200;
    this.height = 136;
    this.x = 0;
    this.y = 0;
    console.log(this.image);
  }
  draw(context) {
    context.drawImage(this.image, 0, 0);
  }
}