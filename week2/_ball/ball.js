
const radius = 10;
const ball = {x:20, y:20, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}


let yAcc = 1.4;
let xAcc = 1;

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display
    old.x = ball.x;
    old.y = ball.y;

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)
    if (ball.y >= 400 - radius - 1 || ball.y <= radius + 1) yAcc *= -.3;
    if (ball.x >= 400 - radius - 1 || ball.x <= radius + 1) xAcc *= -.3;

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance
    ball.dx *= xAcc;
    ball.x += ball.dx;
    ball.dy *= yAcc;
    ball.y += ball.dy;

}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


