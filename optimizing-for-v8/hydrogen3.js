function foo() {
  /* A long comment to avoid inlining.*****************
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
  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    sum = (sum & 0x3FFFFFFF) + 1;
    i++;
    if (i >= 1000) break;
    sum++;
  }
  return sum;
}

function measure(f) {
  var start = new Date().valueOf();
  for (var i = 0; i < 100000; i++) {
    f();
  }
  var end = new Date().valueOf();
  print(end - start);
}

measure(foo);
