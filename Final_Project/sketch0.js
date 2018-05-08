//function to create a random star at the left mouse location
function Star(x,y, img) {
  this.x = x;
  this.y = y;
  this.img = img;

this.display  = function () {
  image(this.img, this.x, this.y);
  }
this.update = function(){
  this.x = this.x + random(-.25, .25);
  this.y = this.y + random(-.25, .25);
  }
}
