// 함수의 표현
// 다양한 방법으로 함수 정의가 가능하며, 함수 표현식처럼 함수를 정의하여 변수에 저장 가능

// 1. 함수 선언식
/* function add_1(x, y) {
  return x + y;
};

// 2. 함수 표현식

const add_2 = function (x, y) {
  return x + y;
};

// 3. 화살표 함수

const add_3 = (x, y) => x + y;

const add_4 = add_1;

console.log(add_4(1, 3));

console.log(add_1 == add_2); // false
console.log(add_1 == add_4); // true

console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3));
console.log(Object.getOwnPropertyDescriptors(add_4));

 */
// 함수 저장
// 배열의 요소(element) 혹은 객체의 속성(property)에 함수를 정의하여 저장 가능

/* let list = ["john", 27, function hello_func() { console.log("hello"); }];
let obj = {
  name: "john",
  age: 27,
  hello_func() {
    console.log("hello");
  },
};

function hello_func() { console.log("hello"); }

hello_func();
obj.hello_func();
list[2](); 

console.log(typeof hello_func);
console.log(typeof obj.hello_func);
console.log(typeof list[2]);
 */

// method
// 객체에 저장된 값이 함수인 경우, 이를 메서드(method)라고 부름

/* function hello_func() {
  console.log("hello");
}
function hi_func() {
  console.log("hi");
}

// let func = hello_func
let obj = {
  name: "john",
  age: 27,
  func: hello_func,
};

hello_func();
hi_func();
obj.func();
console.log(hello_func == obj.func);

obj.func = hi_func;
obj.func(); 
 */

// this
// 메서드에서 객체 내부의 속성 값을 접근할 수 있는 지시자

/* let obj = {
  name: "john",
  age: 27,
  hello_func() {
    console.log("hello " + this.name);
  },
};

obj.hello_func(); */

/* let user = { name: "john" };
let admin = { name: "admin" };

// hello_func 내 this 값은 런타임에 결정
function hello_func() {
  console.log("hello " + this.name);
}

user.func = hello_func; // user.func 수행할 때, (this == user.name)
admin.func = hello_func; // admin.func 수행할 때, (this == admin.name)

user.func(); // output: hello john
admin.func(); // output: hello admin

user["func"](); // output: hello john
admin["func"](); // output: hello admin
 */

// Number

// 지수/진법
// 지수 표기법
// 아주 큰 숫자나 아주 작은 숫자를 표기하기 위 해 지수 표기법(e)으로 0의 개수를 대체 표기 가능
/* let billion_1 = 1000000000; // 10억
let billion_2 = 1e9; // 1 + 0 9개
let us = 1e-6; // micro sec, 왼쪽으로 6번 소수점 이동

console.log(billion_1);// output: 1000000000
console.log(billion_2); // output: 1000000000
console.log(us); // output: 0.000001
 */
// 진법 표기
// 진법 표기를 지원하기 위해 0x(16진수), 0o(8진수), 0b(2진수)로 N 진수 표기 가능

/* console.log(0x0f); // output: 15
console.log(0o17); // output: 15
console.log(0b1111); // output: 15 */

// Number 상수 값
// 지수로 표기되는 양수 최대/최소 값: Number.MAX_VALUE, Number.MIN_VALUE
// 안전하게 표기되는 최대(양수)/최소(음수) 값: Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER
// 무한대 양수/음수 값: Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
// 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형: Number.NaN

// 대표 메서드(1)
// 형 변환
// Number to String: Number.toString(), String(Number), Number+""를 통해 변환 가능

/* let us = 1e-6;
console.log(us.toString());
console.log(typeof us.toString());
console.log(typeof String(us));
console.log(typeof (3 + "")); */

// 자리 수 표현
// 소수의 자리 수 길이를 제한: Number.toFixed(pos)
// 정수와 소수의 자리 수를 합한 길이로 제한: Number.toPrecision(pos)

/* let num_1 = 125.0;
let num_2 = 123.456;
console.log(num_1 - num_2); // output: 1.543999999999997
console.log((num_1 - num_2).toFixed(3)); // output: 1.544
console.log((num_1 - num_2).toPrecision(3)); // output: 1.54 */

// 대표 메서드(2)
// Number 자료형 확인
// 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값(NaN)인지 확인: Number.isNaN()
// 정상적인 유한수인지 확인: Number.isFinite()

/* console.log(!Number.isNaN(0.123));
console.log(!Number.isNaN(123 / "hello"));
console.log(Number.isFinite(-123));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite("hello")); */

// 정수와 실수 형 변환
// 정수로 변환하는 방법(N 진수로 명시적 변환도 가능): Number.parseInt()
// 실수로 변환하는 방법: Number.parseFloat()

/* console.log(Number.parseInt("123px"));
console.log(Number.parseFloat("1.25em"));
console.log(Number.parseInt("1.25em"));
console.log(Number.parseInt("t123"));
console.log(Number.parseInt("0f", 16));

console.log(typeof Number.parseInt("1.25em")); */

// String

// 문자 정의/표기
// 정의 방법

/* console.log("line\nfeed");
console.log("line\rfeed");
console.log("line\\feed");
console.log("line\tfeed");
console.log("line\u{1F60D}feed"); */

// 문자열 길이/접근
// String.length  for문으로도 정말 많이 사용

// 문자 접근
// 문자열 내 개별 문자 접근방법: String.charAt(index), String.charCodeAt(index), String[index]

/* let str = "hello\nworld\n!!!";
console.log(str.length);

console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str[1]); */

// 문자열 검색/변환
// 문자열 검색(index): String.indexOf(substr, pos), String.LastIndexOf(substr, pos)
// 문자열 검색(bool): String.includes(substr, pos), String.startsWith(substr, pos), String.endsWith(substr, pos)

/* let text = "hello, world!!!";

console.log(text.indexOf("l")); // 2
console.log(text.indexOf("l", 3)); // 3
// (찾을 문자, 어디서부터 찾을지) list 3 부터
console.log(text.lastIndexOf("l"));
console.log(text.includes("HeLlo"));
console.log(text.startsWith("ello")); // ~로 시작하는지 false
console.log(text.startsWith("ello", 1)); // true
console.log(text.endsWith("world")); */

// 문자열 대소문자 변환
// 대소문자 변환: String.toUpperCase(), String.toLowerCase()

/* let str = "HeLlo!!";

console.log(str.toUpperCase());
console.log(str.toLowerCase()); */

// 문자열 변환
// 문자열 치환
// 처음 만나는 요소 문자열 치환(치환된 문자열 반환): String.replace(origin_str, change_str)
// 정규 표현식 활용 문자열 치환: 치환 문자열에 정규 표현식 기입 -> /치환문자열/g(전체)i(대소문자 구분X)

/* let text = "heLlo, world!!!";
let change_text = "";

change_text = text.replace("world", "earth");
console.log(change_text);

console.log(text.replace('!', '?'));
console.log(text.replace('l', 'i'));

console.log(text.replace(/l/g, "i")); // g -> global
console.log(text.replace(/l/gi, "i")); */

// 문자열 추출
// 위치 기반 문자열 추출: String.slice(start, end), String.substring(start, end)
// 길이 기반 문자열 추출: String.substr(start, length)

/* let text = "hello, world!!!";

console.log(text.slice(0, 5));
console.log(text.slice(4, 5));
console.log(text.slice(4));
console.log(text.slice(-4));

console.log(text.slice(2, 6));
console.log(text.slice(6, 2));
console.log(text.substring(2, 6));
console.log(text.substring(6, 2));

console.log(text.substr(2, 6));
console.log(text.substr(-5, 3)); */

// 문자열 분할
// 배열로 문자열 분할: String.split(Separator, limit)

let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

let text = "hello";

result = text.split(""); // 문자하나씩 쪼개기
console.log(result);
