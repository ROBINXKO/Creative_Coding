function setup() {
  createCanvas(400,400); // canvas size
}

function draw() {
  background(130); // background color grey

  // Head
  fill(50,205,50); // head color light green
  ellipse(200,200,100,120); // ellipse for the head

  // Eyes
  fill(255); // eye color  white
  ellipse(180,180,20,20); // left eye
  ellipse(220,180,20,20); // right eye

  fill(0); // pupil color black
  ellipse(180,180,10,10); // left pupil
  ellipse(220,180,10,10); // right pupil

  // Mouth
  noFill(); // No fill for the mouth
  stroke(255,69,0); // mouth color orange-red
  strokeWeight(5); // mouth thickness
  arc(200,230,60,60,0, PI); // arc for the mouth

  // Antennae
  stroke(173,216,230); // antennae color light blue
  strokeWeight(3); // antennae thickness
  line(170,150,170,100); // left antenna
  line(230,150,230,100); // right antenna

  // Antenna tips
  fill(173,216,230); // antenna tip color light blue
  ellipse(170,100,10,10); // left antenna tip
  ellipse(230,100,10,10); // right antenna tip
}