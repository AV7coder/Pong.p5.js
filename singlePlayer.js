// Random Ball Placement
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0;

// Canvas
function setup() {
    createCanvas(400, 400);
}

function draw() {

    // Background
    background("blue");

    // Paddle
    fill("red");
    rect(mouseX, 375, 90, 15);

    //Functions
    move();
    display();
    bounce();
    paddle();
    //Score
    fill("yellow");
    textSize(24);
    text("Score: " + score, 10, 25);
    if(yBall === 386){
        ySpeed = 0;
        yBall = 386;
        textSize(48);
        fill("red");
        text("Game ", 100,200);
        fill("black")
        text("Over",230,200);

    }
    }
    // Ball Functions
    function move() {
        if (yBall === 386)
        {
            score = 0;
            xBall = 386;
            yBall = 386;
        }
        else{
            xBall += xSpeed;
            yBall += ySpeed;
        }
    }


    function bounce() {

        if (xBall < 10 || xBall> 400 - 10) {
            xSpeed *= -1;
        }
        if (yBall < 10 || yBall> 400 - 10) {
                ySpeed *= -1;
        }
    }
    function display() {
        fill("orange");
        ellipse(xBall, yBall, 20, 20);
    }
    // Bounce off Paddle
    function paddle() 
    {
        if ((xBall > mouseX && xBall < mouseX + 90) && (yBall + 10>= 375))
        {
            xSpeed *= -1;
            ySpeed *= -1;
            score++;

            }
    }