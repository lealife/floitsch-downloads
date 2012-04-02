function Vector(x, y) {
  this[0] = x;
  this[1] = y;
}
Vector.prototype.dot = function(other) {
  return this[0] * other[0] + this[1] * other[1];
}

var v = new Vector(1, 2);
v.dot(v);
v = new Vector(1.5, 2.2);
v.dot(v);
%OptimizeFunctionOnNextCall(Vector.prototype.dot);
v.dot(v);
