function makeVector(x, y) {
  var result = new Float64Array(2);
  result[0] = x;
  result[1] = y;
  return result;
}
function dot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

var v = makeVector(1, 2);
dot(v, v);
v = makeVector(1.5, 2.2);
dot(v, v);
%OptimizeFunctionOnNextCall(dot);
dot(v, v);
