function A() {}
A.prototype.add = function(x, y) { return x + y; };

function B() {}
B.prototype.add = function(x, y) { return x - y; };

function add(x, y) {
  return x + y;
}

// Returns an A, but a static analysis can't know that.
// Using 'try/catch' to make createA non-optimizable (to get a nicer output
// when tracing inlining).
function createA() {
  try {
    var o;
    if (Math.random() < 0.5) {
      o = new A();
    } else {
      o = new B();
    }
    if (o.add(1, 1) !== 2) return createA();
    return o;
  } catch(e) {}
}

function f() {
  var o = createA();
  var sum = 0;
  for (var i = 0; i < 10000; i++) {
    sum = o.add(sum, i);
  }
  if (sum != 49995000) throw "argh";
}

function measure(f) {
  var start = new Date().valueOf();
  for (var i = 0; i < 100000; i++) {
    f();
  }
  var end = new Date().valueOf();
  print(end - start);
}

measure(f);
