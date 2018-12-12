export class Paddle {
    constructor(pos, size, color, vel, ctx) {
        this.pos = pos;
        this.size = size;
        this.color = color;
        this.vel = vel;
        this.ctx = ctx;
    }

    display() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x,this.pos.y,this.size.w,this.size.h);
    }
}