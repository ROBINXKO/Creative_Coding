let trail = [];

function setup() {
  createCanvas(800,600); // Creates a canvas of size 800x600 pixels
  background(240); // Sets background color to light gray
}

function draw() {
  // Clear the background with slight transparency to create fading effect
  background(240,240,240,25);

  // Add the current mouse position to the trail
  trail.push(createVector(mouseX,mouseY));
  
  // Limit the length of the trail array
  if (trail.length > 50) {
    trail.shift(); // Remove the oldest position
  }

  // Draw the trail
  for (let i =0; i < trail.length; i++) {
    let pos = trail[i];
    let size = map(i,0, trail.length,5,25); // Gradually increase the size of the trail elements
    let alpha = map(i,0, trail.length,0,255); // Gradually increase the transparency
    fill(255,0,0, alpha); // Red color with transparency
    noStroke();
    ellipse(pos.x, pos.y, size, size); // Draw an ellipse at the trail position
  }
}

function mousePressed() {
  // Clear the trail when the mouse is pressed
  trail = [];
}
