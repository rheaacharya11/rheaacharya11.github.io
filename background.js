let img;

function preload() {
  img = loadImage('img/gradient_wave.png'); // Make sure the path is correct.
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // No need to redraw unless window is resized.
}

function draw() {
  background(255);
  let imgAspectRatio = img.width / img.height;
  let windowAspectRatio = windowWidth / windowHeight;

  let newWidth, newHeight;

  if (windowAspectRatio > imgAspectRatio) {
    // Window is wider than the image.
    newWidth = windowWidth;
    newHeight = windowWidth / imgAspectRatio;
  } else {
    // Window is taller or equal to the image in aspect ratio.
    newHeight = windowHeight;
    newWidth = windowHeight * imgAspectRatio;
  }
  
  // Calculate offsets to center the image
  let xOffset = (windowWidth - newWidth) / 2;
  let yOffset = (windowHeight - newHeight) / 2;

  image(img, xOffset, yOffset, newWidth, newHeight); // Center the image
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw(); // Redraw when window is resized
}
