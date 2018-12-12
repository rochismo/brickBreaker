import {
    Paddle
} from './entities/paddle.js';
import {
    Ball 
} from './entities/ball.js';

const canvas = document.querySelector("#game"),
    ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// Paddle
const paddleW = 100;
const paddleH = 20;
const paddleX = canvas.width / 2;
const paddleY = canvas.height - (paddleW + paddleH); 
const paddle = new Paddle(new Vector(paddleX - (paddleW + paddleH) / 2, paddleY),
    paddleW, paddleH, "#fff", new Vector(0,0), ctx);


// Ball
const ballR = 15;
const ballX = canvas.width / 2;
const ballY = canvas.height - (paddleW + paddleH + (ballR * 2));
const ballPos = new Vector(ballX - ballR / 2, ballY);
const ball = new Ball(ballPos, "#fff", new Vector(0,0), ballR, ctx);

function render() {
    ctx.fillStyle = "#000";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
    paddle.display();
    ball.display();
}

function update() {

}

function run() {
    update();
    render();

    requestAnimationFrame(run);
}
run();

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    paddle.setPosition(new Vector((canvas.width / 2) - paddleW / 2,
     canvas.height - (paddleW + paddleH)));
    
    ball.setPosition(new Vector(canvas.width / 2,
     canvas.height - (paddleW + paddleH + (ballR * 2))));
}
