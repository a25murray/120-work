//declare global variables
var x = 0;
var y = 0;
// setup thecanvas size and sets the color of the background to black
function setup(){
  createCanvas(500,500);
  background(0);
}

function draw(){
  // while the mouse is pressed the following loop will
  //continue to draw cirlces that have a random color
  if (mouseIsPressed){
  for (var x = 10; x <= width; x += 30){
    fill(random(255), random(255), random(255));
    ellipse(mouseX * 2, x, 25, 25);
  }
  for (var x = 1; x <= width; x += 30){
    fill(random(255), random(255), random(255));
  }
}


}
