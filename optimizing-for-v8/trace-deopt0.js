function f(upperLimit) {
  var sum = 0;
  for (var i = 0; i < upperLimit; i++) {
    sum += i;
  }
  if (sum < 0) throw "argh";
}

function measure(f) {
  var start = new Date().valueOf();
  for (var i = 0; i < 10000; i++) {
    f(i * 10);
  }
  var end = new Date().valueOf();
  print(end - start);
}

measure(f);
