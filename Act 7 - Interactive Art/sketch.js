let backgroundColor = []; // Array to store background colors
let numColors = 20; // Number of colors to use (adjustable)
let colorChangeSpeed = 0.1; // Speed of color change (adjustable)
let stars = []; // Array to store star objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(windowHeight / 15);
  textAlign(CENTER, CENTER);

  // Generate random background colors on setup
  for (let i = 0; i < numColors; i++) {
    backgroundColor.push(color(random(255), random(255), random(255)));
  }

  // Initialize stars
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(2, 10), // Random star size (between 2 and 10)
      opacity: random(100, 255) // Random star opacity (between 100 and 255)
    });
  }
}

function draw() {
  // Update background colors with smooth transition
  for (let i = 0; i < backgroundColor.length; i++) {
    let nextColorIndex = (i + 1) % backgroundColor.length;
    backgroundColor[i] = lerpColor(
      backgroundColor[i],
      backgroundColor[nextColorIndex],
      colorChangeSpeed
    );
  }

  // Draw a grid of background colors with smooth transition
  for (let y = 0; y < windowHeight; y += windowHeight / 10) {
    for (let x = 0; x < windowWidth; x += windowWidth / 10) {
      let colorIndex = int(floor(x / (windowWidth / 10))) % backgroundColor.length;
      fill(backgroundColor[colorIndex]);
      noStroke();
      rect(x, y, windowWidth / 10, windowHeight / 10);
    }
  }

  // Draw stars in the background
  drawStars();

  // Display the text on top
  fill(0); // Black text color
  text("Welcome to Bath Spa University", windowWidth / 2, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Regenerate background colors on resize for better effect
  backgroundColor = [];
  for (let i = 0; i < numColors; i++) {
    backgroundColor.push(color(random(255), random(255), random(255)));
  }
}

function mousePressed() {
  // Change color generation method on mouse press for variation
  for (let i = 0; i < backgroundColor.length; i++) {
    let hue = random(255);
    backgroundColor[i] = color(hue, map(i, 0, backgroundColor.length,0, 255),255);
  }
}

function drawStars() {
  // Draw twinkling stars in the background
  for (let i = 0; i < stars.length; i++) {
    let { x, y, size, opacity } = stars[i]; // Destructure star object
    fill(255, opacity); // White color with varying opacity
    noStroke();
    ellipse(x,y,size,size); // stars
  }
}