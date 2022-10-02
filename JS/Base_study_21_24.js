// 함수
// 함수는 다수의 명령문을 코드 블록으로 감싸고, 하나의 실행 단위로 만든 코드의 집합
// 유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 블록코드
// 함수는 정의 부분과 호출 부분으로 구성
// 함수는 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내로 작성을 권장

/* 1. 함수 선언식(Function Declarations)
function func(arg1, arg2, ...argN) {
  Expression;
} */

/* function add(x, y) {
  return x + y;
} */

/* 2. 함수 표현식(Function Expression)
const func = function func(arg1, arg2, ...argN) {
  Expression;
} */

/* const add = function (x, y) {
  return x + y;
} */

/* 3. 화살표 함수(Arrow Function)
const func = function func(arg1, arg2, ...argN) =>  Expression;
*/

// const add = (x, y) => x + y;

// 함수 호출
// JS 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음
// ES6에서 도입된 기본값을 통해 undefined 변수가 들어올 경우 값 초기화 지정 가능

// 1. default value

/* function print_add(x, y = 10) {
  console.log(x + y);
}
print_add(10, 20, 30);
print_add(10, 20);
print_add(10);
print_add();

// 2. dynamic parameters

function print_min() {
  // console.log(arguments);
  console.log(arguments[0] - arguments[1]);
}
print_min(10, 20, 30);
print_min(10, 20);
print_min(10);
print_min(); */

// 재귀함수
// 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
// 재귀 함수는 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하는 exit code가 필요

// 1. basic recursive function

/* function recursive(num) {
  if (num == 0) return 0;
  return num + recursive(num - 1);
}

console.log(recursive(3));

// 2. factorial function
function factorial(x) {
  if (x === 0) return 1;

  return x * factorial(x - 1);
}

const num = 3;

let result = factorial(num);

// The factorial of 3 is 6
console.log(`the factorial of ${num} is ${result}`);print_add(10, 20, 30);
print_add(10, 20);
print_add(10);
print_add();
 */

// 콜백 함수
// 콜백 함수(Callback Function)란 다른 함수의 매개변수로 전달되어 수행되어지는 함수
// 고차 함수(Higher-order Function)란 매개변수를 통해 함수를 받아 호출하는 함수

/* function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}
function calculator(callback, x, y) {
  return callback(x, y);
} 

console.log(calculator(add, 7, 3));
console.log(calculator(sub, 7, 3));
console.log(calculator(mul, 7, 3));
console.log(calculator(div, 7, 3));
 */

// call by
// call by value
// 값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향이 미치지 않음
// 원시 타입(primitive type)을 매개 변수로 넘겼을 때 발생

/* let a = 1;
let add = function (b) { b = b + 1 }; // callee
add(a);
console.log(a);
 */

// call by reference
// 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
// 객체 타입(object type)을 매개 변수로 넘겼을 때 발생
// 잘 이해하고 의도치 않은 결과 주의

var a = { v: 1 };
var add = function (b) {
  b.v = b.v + 1;
}; // callee
add(a); // caller
console.log(a.v);
