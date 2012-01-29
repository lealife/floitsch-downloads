function A(x) { this.x = x; }
A.prototype.getX = function() { return this.x; };
A.prototype.add = function(y) { return this.getX() + y; };
function B(x) { this.x = x; }
B.prototype = new A();

function f(o1, o2) {
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
  var sum = 0;
  for (var i = 0; i < 10000; i++) {
    sum = o1.add(sum);
    // Switch o1 and o2 so that the field access is not hoisted out of the loop.
    var tmp = o1;
    o1 = o2;
    o2 = tmp;
  }
  if (sum != 15000) throw "argh";
}

function measure(f) {
  var a1 = new A(1);
  var a2 = new A(2);
  var b = new B(1);
  a1.add(5);
  b.add(5);
  var start = new Date().valueOf();
  for (var i = 0; i < 10000; i++) {
    f(a1, a2);
  }
  var end = new Date().valueOf();
  print(end - start);
}

measure(f);
