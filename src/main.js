import InputHandler from "./input.js";
import Player from "./player.js";

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 300;

  const player = new Player(canvas.width, canvas.height);
  const input = new InputHandler();

  let lastTime = 0;
  
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update(input);
    player.draw(ctx, deltaTime);
    requestAnimationFrame(animate);
  }
  animate(0);
})