function f() {
  try {
    var sum = 0;
    for (var i = 0; i < 10000; i++) {
      sum += i;
    }
    if (sum != 49995000) throw "argh";
   } catch(e) {
    print("count wrong");
  }
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
