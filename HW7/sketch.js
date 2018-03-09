let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
ball.color1 = 255;
ball.color2 = 255;
ball.color3 = 255;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    if (mouseIsPressed) {
      ball.width = constrain(ball.width + 1, 40, 200);
      fill(ball.color1,ball.color2,ball.color3)
      ball.color1 = random(255);
      ball.color2 = random(255);
      ball.color3 = random(255);
    }
    else {
      ball.width = ball.width - 1, 40, 200;
      fill(255)
      fill(ball.color1,ball.color2,ball.color3)
     }


    ellipse(ball.x, ball.y, ball.width, ball.width);
}
function mouseIsPressed(){
  fill(ball.color1,ball.color2,ball.color3)
  ball.color1 = random(255);
  ball.color2 = random(255);
  ball.color3 = random(255);
}
