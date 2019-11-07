const gameObjects = require("./game-objects");
const canvas = require("./canvas");

// Reset game when player catches a goblin

let reset = function() {
  gameObjects.hero.x = canvas.width / 2;
  gameObjects.hero.y = canvas.height / 2;

  // Place goblin randomly on canvas
  gameObjects.monster.x = 32 + Math.random() * (canvas.width - 64);
  gameObjects.monster.y = 32 + Math.random() * (canvas.height - 64);
};

module.exports = NewGame;
