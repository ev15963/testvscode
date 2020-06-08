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

console.log(arr2); //[ 15, 395, 400, 300 ]

var arr = [4, 377, 1024];
var arr2 = arr.filter(function (n) {
  return n % 5 == 0;
});
console.log(arr2); //[]

// 5의 배수만 구해서 각 요소를 2배
var arr = [4, 15, 377, 395, 400, 1024, 3000];
var arr2 = arr
  .filter(function (n) {
    return n % 5 == 0;
  })
  .map(function (n) {
    return n * 2;
  });
console.log(arr2); //[ 30, 790, 800, 6000 ]

var arr = [4, 377, 1024];
var arr2 = arr
  .filter(function (n) {
    return n % 5 == 0;
  })
  .map(function (n) {
    return n * 2;
  });

console.log(arr2);

//find
// 정수 배열에서 5의 배수인 정수 '하나' 찾기
var arr = [4, 15, 377, 395, 400, 1024, 3000];
var arr2 = arr.find(function (n) {
  return n % 5 == 0;
});
console.log(arr2);

// 정수 배열에서 5의 배수인 정수 '하나' 찾기
var arr = [4, 15, 377, 395, 400, 1024, 3000];
var count = 0;
var arr2 = arr.find(function (n) {
  count++;
  return n % 5 == 0;
});
console.log(count);

// 정수 배열에서 5의 배수인 정수만 모으기
var arr = [4, 377, 1024];
var arr2 = arr.find(function (n) {
  return n % 5 == 0;
});
console.log(arr2); //undefined

// 배열 요소의 합 계산하기
var arr = [9, 2, 8, 5, 7];
var sum = arr.reduce(function (pre, value) {
  return pre + value;
});
console.log(sum);

// 배열 요소의 합 계산하기
var arr = [9, 2, 8, 5, 7];
var count = 0;
var sum = arr.reduce(function (pre, value) {
  count++;
  return pre + value;
}, 0); // initialValue가 주어졌다!
console.log(sum); // 31
console.log(count); // 5
