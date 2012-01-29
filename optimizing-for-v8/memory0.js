function A() {}

var a = [];

function f() {
  var b = [];
  for (var i = 0; i < 10000; i++) {
    b[i] = new A();
  }
  a[a.length % 1000] = b;
}

function measure(f) {
  var start = new Date().valueOf();
  for (var i = 0; i < 10000; i++) {
    f();
  }
  var end = new Date().valueOf();
  print(end - start);
}

measure(f);
