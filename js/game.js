import {
    Paddle
} from './entities/paddle.js';
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

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function render() {
    ctx.fillStyle = "#000";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(0,0, canvas.width, canvas.height);
    paddle.display();
}

function update() {

}

function run() {
    update();
    render();

    requestAnimationFrame(run);
}
run();
