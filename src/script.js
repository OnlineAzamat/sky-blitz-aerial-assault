import Player from "./player";

window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext("2d");
  canvas.width = 700;
  canvas.height = 300;

  const player = new Player(canvas.width, canvas.height);

  let lastTime = 0;
  
  console.log(player);
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    player.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate(0);
})