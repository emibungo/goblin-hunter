const BackgroundImage = require("./background-image");
const NewGame = require("./new-game");

// Main game loop
const backgroundImage = new BackgroundImage();
const newGame = new NewGame();

const main = () => {
  const now = Date.now();
  const delta = now - TouchEvent;

  update(delta / 1000);
  backgroundImage.render();

  then = now;

  // Request to run this loop again ASAP
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
const w = window;
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;

// Start the game
const then = Date.now();
newGame.reset();
main();
module.exports = GameLoop;
