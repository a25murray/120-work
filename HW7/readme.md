Alex Murray, Your Section Number

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

A: The code describes the motion of the that the ball will take each time it is ran. First, the code creates an object called ball = {}; which sets the parameters to be called later. Theses parameters include: size, width, x, y, delta_x, delta_y, scale_x, and scale_y. These parameters set the initial trajectory the ball will take, the size of the ball, and what will happen when the mouse is clicked.

The next block of code uses a setup() function, which is pretty self-explanatory, all it is doing is setting up the canvas and setting the background.
The draw() function is doing the heavy lifting. It first sets the ball position to start in the up most left corner and moves it right when the program is started. The first 3 if statements are in place to make sure the ball is in the canvas always. The next 2 functions are also self-explanatory, they are filling the ball (255) and creating the ellipse with the parameters that were used to create the ball = {}; object.

The last function: mousePressed(), will change the trajectory and framerate of the course of the ball, depending on where the mouse is clicked. The trajectory and framerate will build of what the originals were set to in the ball= {}; object.


## How did you alter the sketch?

In the if ( mouseIsPressed ) statement, I created a way to make the ball grow or shrink depending on if the mouse is pressed or not. I also made the color of the ball change to a random color if the mouse is held down.
