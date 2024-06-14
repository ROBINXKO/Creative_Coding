function setup() {
  createCanvas (700,600); // This Code creates a canvas of size 700x600 pixels
  background (240); // Set background color to light gray
  noLoop(); // Prevent draw() from looping automatically
}

function draw() {
  // Define the number of rows and columns
  let rows = 10;
  let cols = 10;
  
  // Calculate the spacing between squares
  let spacing = width / cols;

  // Loop through rows and columns
  for( let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      // Calculate the position of each outer square
      let x = i * spacing;
      let y = j * spacing;
      
      // Set the fill color for the outer square
      fill(220);
      stroke(0);
      strokeWeight(2);
      
      // Draw the outer square
      rect(x, y, spacing, spacing);
      
      // Randomly choose a pattern to draw inside the smaller square
      let pattern = int(random(4));
      let offsetX = spacing / 10;
      let offsetY = spacing / 10;
      let innerSize = spacing - offsetX * 2;
      
      switch(pattern) {
        case 0:
          drawCirclePattern(x + offsetX, y + offsetY, innerSize);
          break;
        case 1:
          drawLinesPattern(x + offsetX, y + offsetY, innerSize);
          break;
        case 2:
          drawCrossPattern(x + offsetX, y + offsetY, innerSize);
          break;
        case 3:
          drawTrianglesPattern(x + offsetX, y + offsetY, innerSize);
          break;
      }
    }
  }
}

function drawCirclePattern (x,y,size) {
  fill(randomBrightColor());
  noStroke();
  ellipse(x + size /2,y + size /2,size * 0.8,size * 0.8);
}

function drawLinesPattern(x,y,size) {
  stroke(randomBrightColor());
  strokeWeight(2);
  for (let i= 0; i <= size; i += size /10) {
    line(x,y + i,x + size,y + i);
  }
}

function drawCrossPattern(x,y,size) {
  stroke(randomBrightColor());
  strokeWeight(4);
  line(x,y,x + size,y + size);
  line(x + size,y,x,y + size);
}

function drawTrianglesPattern(x, y, size) {
  fill(randomBrightColor());
  noStroke();
  triangle(x,y,x + size, y,x + size /2,y + size);
  fill(randomBrightColor());
  triangle(x,y + size,x + size,y + size,x + size /2,y);
}

function randomBrightColor() {
  // Define a set of bright colors
  let colors = [
    color(50,205,50), // Green
    color(2550,0), // Red
    color(128,0,128), // Purple
    color(255,255,0), // Yellow
    color(0,0,139) // Blue
    ];
  
  // Randomly select and return one of the bright colors
  return colors[int(random(colors.length))];
}
