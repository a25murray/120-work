//Alex Murray

// creates variables that will be used later when creating the circle
let ellipseWidth = 0;
let ellipseHeight = 0;
let ellipseColor = 0;

// sets up how big the canvas will be as well as hoe mnay frames will be proceesd per second
function setup() {
  createCanvas( 900 , 600);
  background(243,241,236);
  frameRate(20)
}

function draw(){
  push();
  //Draw the triangles that will popluate the screen at random
  stroke('#ffffff');
  strokeWeight(5);
  fill('#a30404');
  translate(random(-100, width-100), random(-100, height-100));
  rotate(frameCount);
  triangle(0, 300,300, 0, 150, 200);
  pop();
  push();


  // dictates that the circle will follow the mouse's coordinates
  fill(ellipseColor, ellipseColor,160);
  strokeWeight(2);
  ellipse(mouseX,mouseY,ellipseWidth,ellipseHeight);
  pop();

  // how fast the circle will grow

  ellipseWidth = ellipseWidth + .5;
  ellipseHeight = ellipseHeight + .5;
  //changes the color of the circle
  ellipseColor = ellipseColor + 15;
  ellipseColor = ellipseColor % 100;
}
