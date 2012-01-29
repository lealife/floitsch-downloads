function foo(a) {
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
  var xs = 0;
  var ys = 0;
  for (var i = 0; i < a.length; i++) {
    var p = a[i];
    sum += p.distance;
    xs += p.x;
    ys += p.y;
    p.method();
  }
  return sum;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distance = Math.sqrt(x*x + y*y);
  if (this.distance < 100) this.isClose = true;
}
Point.prototype.isClose = false;
Point.prototype.method = function() {
  // Do nothing. Just to get a method call.
}

function measure(f) {
  var a = [];
  for (var i = 0; i < 1000; i++) {
    o = new Point(i, i);
    a.push(o);
  }
  var start = new Date().valueOf();
  for (var i = 0; i < 100000; i++) {
    var t = f(a);
  }
  var end = new Date().valueOf();
  print(end - start);
}

measure(foo);
