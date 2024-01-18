import InputHandler from "./input.js";
import Player from "./Player.1.js";

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 400;

  const player = new Player(canvas.width, canvas.height);
  const input = new InputHandler();
  let lastTime = 0;
  
  function animate() {
    // const deltaTime = timeStamp - lastTime;
    // lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update(input);
    player.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
})