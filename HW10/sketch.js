// Creates 2 arrays one with text and one with colors.
var colorstext = ["Blue","Green","Purple","Red","Yellow","Pink"];
var colors= ["#0000FF",
         "#00FF00",
         "#800080",
         "#FF0000",
         "#FFFF00",
         "#FFC0CB"];
var index1 = 0;
var index2 = 0;
var firstname = "Alex";
var lastname = "Murray";
function setup() {
  createCanvas(windowWidth, 400);
}
// sets the background to the corresponding color that is indexed within the array
function draw() {
  background(colors[index2]);
// Sets the text to the color of the back
fill("white");
textSize(50);
text(colorstext[index1], 300, 200);
textAlign(CENTER)
}
// Whenever the mouse is pressed, the index of both arrays will increase, when the index
// hits the seventh posistion, it will start over from the start.
function mousePressed() {
  index1 = index1 + 1 ;
  index2 = index2 + 1;
if (index1 == 6) {
  index1 = 0 ;
  index2 = 0;
  
function addThings( firstname, lastname ) {
    // Add the values together
  let result = firstname + lastname;
    //Print the result
  result = "Created By: '" + firstname + lastname;
  textSize(18);
  textAlign( RIGHT );
  text( result);
}
}
}
