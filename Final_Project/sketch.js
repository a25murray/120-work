//Global variables
let sky;
let shootingStar;
var stars = [];
let star;
var stararray =[];
let img = {};
var song;
img.pos = { x: 1600, y: 1 };
img.delta = { x: 1000, y: 50 };

//loads in the images
// creates an array of images (stars)
function preload(){
    sky = loadImage('images/nightsky.jpg');
    shootingStar = loadImage('images/shoting_star.png');
    stararray[0] = loadImage('images/star1.png');
    stararray[1] = loadImage('images/star2.png');
    stararray[2] = loadImage('images/star3.png');
}

function setup(){
    createCanvas(1700,1000)
}
// When the left mouse button is clicked, a random star will be drawn
function mousePressed(){
  push();
  var r = floor(random(0, stararray.length));
  imageMode(CENTER)
  var b = new Star(mouseX,mouseY, stararray[r]);
  stars.push(b);
  pop();
}
// when the left arrow is tapped, a shooting star will fade down the screen
// seems to only work on Microsoft Edge for some reason
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    image( shootingStar, img.pos.x, img.pos.y, img.size, img.size );
    img.pos.x -= img.delta.y/2;
    img.pos.y += img.delta.y/2;
  }

}
// draws the background and text that gives the user directions
function draw(){
  background(sky);

  textSize(40)
  fill(255)
  text("Keep tappping the Left Arrow to send a shooting star (only works on Microsoft Edge) ",5,50)
  text("Click the left mouse button to add a star",5, 100)
  for (var i = stars.length -1; i>=0; i--){
    stars[i].update();
    stars[i].display();


  }

}
