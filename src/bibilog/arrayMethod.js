var arr = [3, 9, 4, 2, 7, 6];
arr.forEach(function (n) {
  if (n % 2 == 0) {
    console.log(n);
  }
});

var arr = ['foo', 'hello', 'diamond', 'A'];
var arr2 = [];
arr.forEach(function (str) {
  arr2.push(str.length);
});

console.log(arr2);

var arr = [4, 15, 377, 395, 400, 1024, 300];
var arr2 = arr.filter(function (n) {
  return n % 5 == 0;
});

console.log(arr2);
