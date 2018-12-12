import {
    Paddle
} from './entities/paddle.js';
const canvas = document.querySelector("#game"),
    ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const paddle = new Paddle(new Vector(canvas.width / 2, canvas.height / 4))

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function render() {
    ctx.fillStyle = "#000";
    ctx.fillRect();

}

function update() {

}
