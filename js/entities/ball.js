export class Ball{
    constructor(pos, color, vel, size, ctx){
        this.pos = pos;
        this.color = color;
        this.vel = vel;
        this.size = size;
        this.ctx = ctx;
    }

    display() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2, false);
        this.ctx.fill();
        this.ctx.closePath();
    }

    setPosition(pos) {
        this.pos = pos;
    }
}