export class Brick{
    constructor(pos, color, size, idx, ctx){
        this.pos = pos;
        this.color = color;
        this.size = size;
        this.idx = idx;
        this.ctx = ctx;
    }

    display(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x,this.pos.y,this.size.w,this.size.h);
    }

    update(){
        
    }

}