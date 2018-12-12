export class Paddle {
    constructor(pos, width, height, color, vel, ctx) {
        this.pos = pos;
        this.width = width;
        this.height = height;
        this.color = color;
        this.vel = vel;
        this.ctx = ctx;
    }

    display() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height);
    }
}