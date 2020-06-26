/** --- JS Parser 내부의 호이스팅(Hoisting)의 결과 - 위와 동일 --- */
var foo2; // [Hoisting] 함수표현식의 변수값 "선언"

function foo() {
  // [Hoisting] 함수선언문
  console.log('hello');
}

foo();
//foo2(); // ERROR!!

foo2 = function () {
  console.log('hello2');
};
