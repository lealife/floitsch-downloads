function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.dot = function(other) {
  return this.x * other.x + this.y * other.y;
}

var v = new Vector(1, 2);
v.dot(v);
v = new Vector(1.5, 2.2);
v.dot(v);
%OptimizeFunctionOnNextCall(Vector.prototype.dot);
v.dot(v);
