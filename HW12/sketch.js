
let balls = [];
const numOfBalls = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    let init_x = 50;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));

        init_x += 10;
        if (init_x > width) {
            init_x = 75;
            init_y += 10;
        }
    }
}
function draw() {
    background('black');

    for (let i = 0; i < balls.length; i++) {
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}
class Ball {
    constructor(x, y, size) {
        this.color = 'Red';
        this.size = random(5, 175);
        this.rad = this.size / 4;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-1, 8);
        this.deltaY = random(-1, 8);
    }

    display() {
        push();

        stroke(15);
        fill(random(256), random(256), 50);
        translate(this.posX, this.posY);
        ellipse(10, 10, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {

        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }

        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }
    ballCheck(someBalls, thisId) {
        for (let n = 0; n < someBalls.length; n++) {
            if (n != thisId) {
                let d = dist(this.posX, this.posY, someBalls[n].posX, someBalls[n].posY);
                let combinedR = this.rad + someBalls[n].rad;

            }
        }
    }
}
