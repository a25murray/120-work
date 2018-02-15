function setup() {
    // Setup basic elements
    createCanvas(600, 600);
    background('#f4c242');

    // move everything to the center of the canvas
    translate(300, 300);

    // Main body
    push();
    rectMode(CENTER);
    fill('#a51609');
    ellipse(0, 0, 200, 300);
    // Head

    // skulL
    // translate to the head position
    translate(0, -150);
    fill('#a51609');
    ellipse(0, 50, 200, 225);
    //eyes
    fill('#a51609');
    ellipse(-80, -20, 100, 40);
    fill(0, 0, 0);
    ellipse(-80, -20, 40, 40);

    fill('#a51609');
    ellipse( 80, -20, 100, 40);
    fill(0, 0, 0);
    ellipse( 80, -20, 40, 40);
    //nose
    push();
    fill(0,0,0)
    triangle(10, 7, 6, 20, 18, 7);
    fill(0,0,0)
    triangle(-10, 7, 2, 20, 0, 7);
    // horns
    push();
    fill('#e2e1d7');
    triangle(-10, -40, -50, -50, -75, -100);
    fill('#e2e1d7')
    scale(-1,1);
    translate(20,0)
    triangle(-10, -40, -50, -50, -75, -100);

    pop();
    //Teeth -  top row
    push();
    fill('#e2e1d7');
    translate(20, 0);
    triangle(-16, 50, -4, 31, -30, 31);
    translate(-25, 0);
    triangle(-16, 70, -4, 31, -30, 31);
    translate(50, 0);
    triangle(-16, 90, -4, 31, -30, 31);
    translate(50  , 0);
  //Teeth - bottom row
    push();
    scale(1,-2);
    translate(-38, -100);
    triangle(-16, 70, -4, 31, -30, 31);
    translate(-25,0);
    triangle(-16, 60, -4, 31, -30, 31);
    translate(-25,0);
    triangle(-16, 70, -4, 31, -30, 31);
    translate(-25,0);
    triangle(-16, 80, -4, 31, -30, 31);


    // wings
    push();
    // translate to the wings position
    translate(0, -50);
    strokeWeight(15);
       line(65, 40, 240, 30);
       line(65, 40, 250, 0);
       line(65, 40, 250,70);
       line(65, 40, 250, 120);
       line(250,0,250,120)
       line(-250,0,-250,120)
       line(-40,40,-250, 120)
       line(-40,40, -240, 30);
       line(-40,40,-250,0);
       line(-40, 40, -250, 70);
       pop();

       //Stinger
       push();
       translate(0,0)
       fill('#e2e1d7')
       rotate(110)
       triangle(-16, 80, -4, 31, -30, 31);
       // Naming
       push();
       // move the text up
       scale(-1,1)
       translate(0,70);
       textAlign(CENTER);
       textSize(20);
       textFont("Helvetica");
       text("Fluffy the bug, by Alex Murray", 10, 25);
       pop();
  pop();


}
