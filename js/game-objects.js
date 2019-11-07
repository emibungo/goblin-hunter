const KeyboardControls = require("./keyboard-controls");
const NewGame = require('./new-game')

// Game Objects

const hero = {
  speed: 256, // movement in pixels per second
  x: 0,
  y: 0
};

const monster = {
  x: 0,
  y: 0
};

const monstersCaught = 0;

// Update game objects

const update = function(modifier) {
  if (38 in KeyboardControls.keysDown) {
    // Player holding up
    hero.y -= hero.speed * modifier;
  },
  if (40 in KeyboardControls.keysDown) {
    // Player holding down
    hero.y += hero.speed * modifier;
  },
  if (37 in KeyboardControls.keysDown) {
    // Player holding left
    hero.x -= hero.speed * modifier;
  },
  if (39 in KeyboardControls.keysDown) {
    // Player holding right
    hero.x += hero.speed * modifier;
  },

  // Catching the goblin
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    ++monstersCaught;
    NewGame.reset();
  }
};

module.exports = gameObjects;
