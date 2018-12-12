function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function ({
    x,
    y
}) {
    console.log(this);
    this.x += x;
    this.y += y;
}

Vector.prototype.sub = function ({
    x,
    y
}) {
    this.x -= x;
    this.y -= y;
}

Vector.prototype.mult = function ({
    x,
    y
}) {
    this.x *= x;
    this.y *= y;
}

function getDistance(obj1, obj2) {
    const dx = Math.pow(obj2.x - obj1.x, 2);
    const dy = Math.pow(obj2.y - obj1.y, 2);
    return Math.sqrt(dx + dy);
}