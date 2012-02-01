function A(x) { this.x = x; }

function foo(o) {
  /* Add comment to make function non-inlinable. This simplifies the analysis
     of the function.
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
  return o.x;
}

var o1 = new A(5);
var o2 = new A(499);
o2.y = 99;
for (var i = 0; i < 1000000; i++) {
  foo(o2);
  foo(o1);
}
