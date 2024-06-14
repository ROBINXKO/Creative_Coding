function setup() {
  createCanvas(800,400); // Create a canvas of size 800x400 pixels
  background(0); // background color black
  
  // Set text properties
  textAlign(CENTER, CENTER); // Center align the text
  textSize(64); // Set the text size
  textStyle(BOLD); // Set the text style to bold
  noLoop(); // Prevent draw() from looping automatically
  
  drawText();
}

function drawText() {
  // Define the colors for the text
  let colors = [
    color(255,0,0), // Red
    color(0,255,0), // Green
    color(0,0,255), // Blue
    color(255,255,0), // Yellow
    color(255,0,255), // Magenta
    color(0,255,255) // Cyan
  ];
  
  // Draw the text with a gradient effect
  for (let i = 0; i < 6; i++) {
    fill(colors[i]);
    text('Creative Computing',width /2 ,height / 2 - 40 + i * 20);
  }
  
  // Draw the main text in white
  fill(255);
  text('Creative Computing', width / 2 ,height / 2);
}
