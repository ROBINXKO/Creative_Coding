var img; // Declares variable to hold the image

function preload() {
  img = loadImage("japan.jpg"); // Loads the image "japan.jpg" 
}

function setup() {
  createCanvas(560,350); // Creates a canvas of size 560x350 pixels
  background(0); // Sets background color to black
}

function draw() {
  background(0); // Refreshs the background to black each frame
  
  image(img, 0, 0); // Displays the loaded image at (0, 0)
  
  // Maps the mouseX position to a range between 2 and 20 for the POSTERIZE filter
  var v = map(mouseX, 0, width, 2, 20);
  
  // Applies the POSTERIZE filter with mapped value 'v'
  filter(POSTERIZE, v);
}
