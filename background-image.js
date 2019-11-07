// Background Image
const bgReady = false;
const bgImage = new Image();

bgImage.onload = () => {
  bgReady = true;
};
bgImage.src = "images/background.png";
