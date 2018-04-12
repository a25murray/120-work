// global variables
let clouds = [];
let cloudColor = 0;
function setup() {
    createCanvas(windowWidth, 400);
    let b = new Cloud(width/2, height/2, 10);
    clouds.push(b);
}
//function to create the clouds on the screen
function mouseWheel() {
    let r = random(20, 25);
    let b = new Cloud(mouseX, mouseY, r);
    clouds.push(b);
}
// draws the sky backround
function draw() {
    background("Blue");
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].move();
        clouds[i].show();
    }

}
//creates class of clouds using a constructor
class Cloud {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-.25, .25);
        this.y = this.y + random(-.25, .25);
    }

    show() {
        // this shows the moving clouds around and draws them on the screen when the mousewheel moves
        noStroke();
        fill(230);
        ellipse(this.x, this.y, this.r * 2);
        //sun
        fill("Yellow")
        ellipse(101,49,500,500)
    }
}
