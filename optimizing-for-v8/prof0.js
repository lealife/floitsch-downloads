function f() {
  var result = "";
  for (var i = 0; i < 10000; i++) {
    result += i;
  }
  return result;
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
