
function something(x, y = "something", z = 5) {
  var_dump(x, y, z);
}

function sum(a, b) {
  return a + b;
}

function hello(a, b) {
  return "hello!";
}


echo(hello(5, 6))
var_dump(something(5), sum(1,2))