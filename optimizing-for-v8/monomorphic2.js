function add(x, y) {
  return x + y;
}

function f() {
  var sum = 0;
  for (var i = 0; i < 10000; i++) {
    sum = add(sum, i);
  }
  if (sum != 49995000) throw "argh";
}

function measure(f) {
  add("x", "y");
  var start = new Date().valueOf();
  for (var i = 0; i < 100000; i++) {
    f();
  }
  var end = new Date().valueOf();
  print(end - start);
}

measure(f);
