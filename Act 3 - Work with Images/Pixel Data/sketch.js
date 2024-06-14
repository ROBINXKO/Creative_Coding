// Declare variables for the image and mouse coordinates
var img, x, y;

// Preload function to load the image before setup
function preload() {
  img = loadImage("japan.jpg"); // Load the image "japan.jpg"
}

function setup() {
  createCanvas(560,350); // canvas of size 560x350 pixels
  background(0); // background colorblack
  noStroke(); // Disable stroke (no outline for shapes)
}

function draw() {
  background(0); // Refresh's the background to black each frame

  x = mouseX; // Update x-coordinate with current mouse position
  y = mouseY; // Update y-coordinate with current mouse position

  image(img,0,0); // Displays the loaded image at position (0, 0)

  var c = get(x, y); // Get the color of the pixel at coordinates (x, y)
  fill(c); // Uses the color obtained from the image as fill color

  rect(x,y,150,100); // rectangle at the mouse position (x, y) with size 150x100 pixels
}
