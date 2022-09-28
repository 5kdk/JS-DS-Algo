// Scope란?
// 변수 혹은 상수에 접근할 수 있는 범위
// 모듈/함수 내 코드에서 동일한 변수 사용시 간섭을 줄이는 용도로 사용
// Scope는 Global Scope와 Local Scope의 타입으로 구분
// Global Scope: 전역에 선언되어 어디에서도 접근 가능
// Local Scope(block, function level scope): 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능

/*
// Global scope
let x = 1;
let y = 2;
let z = 3;

console.log(x);
console.log(y);

{
  // local scope
  let x = 3;
  let y = 4;
  console.log(x); // output: 3
  console.log(y); // output: 4
  console.log(z); // 지역변수를 선언하지 않았으므로 전역변수의 3을 그대로 쓴다.
}

function scope() {
  let x = 5;
  let y = 6;
  console.log(x); // output: 5  - 함수 호출 시
  console.log(y); // output: 6
}

console.log(x); // output: 1
console.log(y); // output: 2
*/

/*
// 예제 1
let A = 1;
let B = 2;

{
  let C = 3;
  let D = 4;

  console.log(A);
  console.log(C);
}

// console.log(C); // not defined 오류
*/

/*
// 예제 2
let A = 1;

{
  let C = 3;
  let D = 4;

  console.log(C); // output: 3
  {
    let C = 5;
    let D = 6;

    console.log(C); // output: 5
  }
}
*/
/*
// 예제 3
let index = 1000;

function local_func() {
  let index = 100;

  for (let index = 0; index < 10; index++) {
    console.log(index); // output: 0 ~ 9
  }
  
  console.log(index); // output: 100
}

local_func(); // 함수 실행
console.log(index); // output: 1000
*/

// 조건문
// 알고리즘에서 논리적 비교를 할 때 사용되는 조건식
// if, if else, eles 키워드를 통해 구성되며, 조건식에 맞을 경우 중괄호 {} 내에 있는 명령문을 수행
// 단, 실행 문장이 단일 문장일 경우에는 {} 생략 가능

/*
let apple_price = 9;

if (apple_price >= 10) {
  // 10 ~
  console.log("very expensive :(");
} else if (apple_price < 5) {
  // ~ 5
  console.log("very cheap :)");
} else {
  // 5 ~ 9
  console.log("nice!"); // output: nice!
}

// 단일 문장 {} 생략 - 생략하는 것이 가독성이 좋은것인지, 많은 데이터 처리할 때 처리시간 소요가 다른지 확인해볼 것
let age = 10;
// ~ 9
if (age < 10) console.log("young!");
// 10 ~
else console.log("old!"); // output: old!
*/

// 3항 연산자
// 3항 연산자를 통해 if-else를 대체하여 사용 가능
// 3항 연산자: 변수 = (조건식) ? 참일 때 값 : 거짓일 때 값

/*
let age = 20;

// 조건문: if-else

// if (age < 19) {
//   msg = "The user is not an adult.";
// } else {
//   msg = "The user is an adult.";
// }

if (age < 19) msg = "The user is not an adult.";
else msg = "The user is an adult.";

console.log(msg);

// 조건문: 3항 연산자
msg_another = age < 19 ? "The user is not an adult." : "The user is an adult.";
console.log(msg_another);
*/

// 조건문 switch
// switch는 표현식을 평가하여 그 값이 일치하는 case 문을 실행하는 조건문
// switch, case, break, default 키워드를 통해 구성되며, switch의 조건에 맞는 case 구문을 수행
// 일반적으로 하나의 case만 수행되도록 case 끝을 break으로 끝맺음 (여러개의 케이스가 수행되도록 break을 안넣는 경우도 있음)

/*
// swich 예제 1
let day_number = 1;
let day = ""; // string을 쓸 예정이니 string 공백으로 초기화

switch (day_number) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "error";
    break;
}

console.log(day); // output: Monday
*/

// switch 예제 2 공통된 로직이 있을경우 break 생략, 코드 효율성
let browser = "Chrome";

switch (browser) {
  case "Explorer":
    msg = "ActiveX installation required.";
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    msg = "Supported browser!";
    break;
  
  default:
    msg = "Unsupported browser!";
    break;
}

console.log(msg); // output: "Supported browser!"
