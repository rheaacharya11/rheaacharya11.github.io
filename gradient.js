function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();  // Draw only once
  }
  
  function draw() {
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        // Calculate the interpolation factor based on the diagonal distance
        let inter = map(i + j, 0, width + height, 0, 1);
        let c = lerpColor(color(255, 20, 147), color(0, 128, 0), inter);
        
        let grain = random(50) - 25; // Adjust grain intensity
        let r = red(c) + grain;
        let g = green(c) + grain;
        let b = blue(c) + grain;
        stroke(r, g, b);
        point(i, j);
      }
    }
  }

  function windowResized() {
    clearTimeout(resizeTimeout); // Clear the previous timeout
    resizeTimeout = setTimeout(() => {
      resizeCanvas(windowWidth, windowHeight);
      redraw(); // Redraw only after resizing is finalized
    }, 300); // Delay of 300ms after resizing stops
  }
  