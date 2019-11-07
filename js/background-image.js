const Canvas = require("./canvas");

// Background Image
const bgReady = false;
const bgImage = new Image();

bgImage.onload = () => {
  bgReady = true;
};
bgImage.src = "images/background.png";

// Render everything
const render = function() {
  if (bgReady) {
    Canvas.ctx.drawImage(bgImage, 0, 0);
  }
};

module.exports = BackgroundImage;
