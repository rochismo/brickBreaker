export class Brick{
    constructor(pos, color, size, vel, ctx){
        this.pos = pos;
        this.color = color;
        this.size = size;
        this.vel = vel;
        this.ctx = ctx;
    }

    display(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x,this.pos.y,this.size.w,this.size.h);
    }

    
}