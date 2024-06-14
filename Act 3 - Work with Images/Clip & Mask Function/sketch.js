let img;

function preload(){

  img=loadImage('japan.jpg')

}

function setup() {

  createCanvas(600,500);

  background(190,220,250);

  
  
  img.resize(200,200);

  let cnv7 = createGraphics(200,200);

  cnv7.circle(100,100,190);

  cnv7.triangle(0,0,100,200,200,0);

  ctx7 = cnv7.canvas.getContext("2d");

  ctx7.clip();

  cnv7.canvas.getContext("2d").clip();

  cnv7.image(img,0,0);

  image(cnv7,350,225);

}
//image inside shape, using clip function - only works with one shape