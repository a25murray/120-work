//Alex Murray

//declare global variables
let locate = {
  x: 100,
  y: 50
};
let circlesize = {
  w: 50,
  h: 25
};
let circleColor = 100;
let circle_min = 0;
let circle_max;
// sets up how big the canvas will be
function setup() {
  createCanvas( 900 , 600);
  background(0);
  circle_max = width - 20;
}

function draw(){

  // draw constraint lines so the circle does not get too big
  push();
  var leftWall = 200;
  var rightWall = 700;
  constrain(mouseX, leftWall, rightWall);
  stroke("yellow");
  strokeWeight(1);
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);
  pop();

  // draw circles at random
  push();
  frameRate(20);
  locate.x = random(width);
  locate.y = random(height);
  circlesize.w = random(50,10);
  circlesize.h = random(10, 50);
  fill(circleColor,circleColor, 160);
  noStroke();
  rotate(frameCount);
  ellipse(locate.x, locate.y, circlesize.w, circlesize.h);
  pop();


  push();
  let circle_size = map( mouseX/4, 0 , width, circle_min, circle_max );
  // draw a circle, based on mouseX
  fill(circleColor,circleColor, 160);
  //centers the circle
  ellipse( width/2, height/2, circle_size );
  pop();
  // change the color of the circles
  circleColor = circleColor + 15;
  circleColor = circleColor % 150;
}
// clear the animation and start from scratch
function mousePressed(){
  clear();
  background(0);
}
