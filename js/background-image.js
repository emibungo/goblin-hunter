const Canvas = require("./canvas");
const gameObjects = require("./game-objects")

// Background Image
const bgReady = false;
const bgImage = new Image();

bgImage.onload = () => {
  bgReady = true;
};
bgImage.src = "images/background.png";

// Render everything
const render = function() {
  const canvas = new Canvas;

  if (bgReady) {
    canvas.ctx.drawImage(bgImage, 0, 0);
  },

  if (heroReady) {
    canvas.ctx.drawImage(heroImage, hero.x, hero.y)
  },

  if (monsterReady) {
    canvas.ctx.drawImage(monsterImage, monster.x, monster.y)
  },

  // Scoring
  const gameObjects = new gameObjects
  canvas.ctx.fillStyle = "rgb(250, 250, 250)";
  canvas.ctx.font = "24px Helvetica";
  canvas.ctx.textAlign = "left";
  canvas.ctx.textBaseline = "top";
  canvas.ctx.fillText("Monsters caught: " + gameObjects.monstersCaught, 32, 32); 
};
module.exports = BackgroundImage;
