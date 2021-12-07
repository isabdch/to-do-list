var arr = [1, 10, 15, 23, 38];
var add = 0;

function res() {
  for (var i = 0; i < arr.length; i++) {
    add += arr[i];
  }
  return add;
}

var x = res();
console.log(x)

