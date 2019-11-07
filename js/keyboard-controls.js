// Handle keyboard controls

const keysDown = {};

addEventListener(
  "keydown",
  function(event) {
    keysDown[event.keyCode] = true;
  },
  false
);

addEventListener(
  "keyup",
  function(event) {
    delete keysDown[event.keyCode];
  },
  false
);
