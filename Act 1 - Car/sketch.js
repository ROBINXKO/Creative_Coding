function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  
  fill(50,210,210)
  //rect(x,y,width,height) 
  rect(100,150,190,80)
  fill(50,210,210)
  rect(140,90,105,60)
  
  fill(2)
  //ellipse (x,y,width,height)
  ellipse(140,240,50,50)
  ellipse(250,240,50,50)
  
  //triangle(x1,y1,x2,y2,x3,y3)
  fill(100,200)
  triangle(245,90,290,150,245,150)
  
  stroke(0)
  strokeWeight(2)
  
  //line(x1,y1,x2,y2)
  line(0,265,1000,265)
}