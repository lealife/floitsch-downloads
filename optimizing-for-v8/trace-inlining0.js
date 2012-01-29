function add(x, y) {
  /* A very important comment explaining how add works.
     **************************************************
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     --------------------------------------------------
     An Ascii-art from Wikipedia:
       |\_/|        ****************************
      / @ @ \       *  "Purrrfectly pleasant"  *
     ( > º < )      *       Poppy Prinz        *
      `»»x««´       *       (pprinz@...)       *
      /  O  \
     -------------
     **************************************************
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     --------------------------------------------------
   */
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
  var start = new Date().valueOf();
  for (var i = 0; i < 100000; i++) {
    f();
  }
  var end = new Date().valueOf();
  print(end - start);
}

measure(f);
