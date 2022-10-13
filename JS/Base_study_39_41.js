// Math
// 표준 Built-in 객체로써 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체
// Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.fuction()으로 언제든 호출 가능

// 최대/최소/절대값
// Math.Max(...x), Math.min(...x), Math.abs(x)
// 배열은 인수로 받아 최대/최소를 산출하려면 apply 함수 혹은 스프레드 문법 사용 필요

/* console.log(Math.max(1, -1));
console.log(Math.min(1, -1));

console.log(Math.max(1, -1, 5, 23, 17, -4));
console.log(Math.max(1, -1, 5, 23, 17, -4));

let nums = [1, -1, 5, 23, 17, -4];
// apply
console.log(`Max: ${Math.max.apply(null, nums)}`);
console.log(`Max: ${Math.min.apply(null, nums)}`);
// spread
console.log(Math.max(...nums));
console.log(Math.min(...nums));
// abs
console.log(Math.abs(1));
console.log(Math.abs(-1));
console.log(Math.abs(-Infinity)); */

// 속성 및 랜덤 Math.random()

/* // math property
console.log(Math.E); // 오일러
console.log(Math.PI); // 파이

// random
for (let i = 0; i < 3; i++) {
  console.log(Math.random());
}

for (let i = 0; i < 3; i++) {
  console.log(Number.parseInt(Math.random() * 10));
} */

// 제곱/제곱근/소수점 처리
// 제곱: Math.pow(x, y), 제곱근: Math.sqrt(x)
// 소수점 이하 반올림 정수: Math.round(x)
// 소수점 이하 올림: Math.ceil(x), 소수점 이하 내림: Math.floor(x)

/* // pow
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

// sqrt
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(2)); // 1.4142135623730951

// round, ceil, floor
console.log(Math.round(3.5)); // 4
console.log(Math.round(-2.3)); // -2
console.log(Math.round(-2.7)); // -3

console.log(Math.ceil(3.5)); // 4
console.log(Math.ceil(-2.3)); // -2
console.log(Math.ceil(-2.7)); // -2

console.log(Math.floor(3.5)); // 3
console.log(Math.floor(-2.3)); // -3
console.log(Math.floor(-2.7)); // -3 */

// Date
// 표준 Built-in 객체로써 날짜와 시간을 위한 속성값과 메서드를 제공하는 객체
// Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값으로 표현

/* let date_now = new Date();
let date_str = Date();

console.log(date_now); // 2022-10-13T03:53:20.188Z
console.log(date_str); // Thu Oct 13 2022 12:53:20 GMT+0900 (대한민국 표준시)
console.log(typeof date_now); // object
console.log(typeof date_str); // string

let date_ms_1 = new Date(0);
console.log(date_ms_1); // 1970-01-01T00:00:00.000Z
let date_ms_2 = new Date(1000 * 3600 * 24);
console.log(date_ms_2); // 1970-01-02T00:00:00.000Z

let date_string = new Date("2020-01-01"); // date parsing
console.log(date_string); // 2020-01-01T00:00:00.000Z

// month: 1월(0) ~ 12월(11)
let date_params_1 = new Date(2021, 0, 1);
console.log(date_params_1); // 2020-12-31T15:00:00.000Z - UTC 기준
let date_params_2 = new Date(Date.UTC(2021, 0, 1)); // UTC 고정
console.log(date_params_2); // 2021-01-01T00:00:00.000Z */

// 날짜정보 얻기
// 년/월/일/요일: Date.getFullyear(), Date.getMonth(), Date.getMinutes()
// 시/분/초/ms: Date.getHours(), Date.getMinutes(), Date.getSeconds()
// 주어진 일시 - 1970/1/1 차분(ms): Date.getTime(), 현지시간 - 표준 시간 차분(min): Date.getTimezoneOffset()

/* let date = new Date();

// year, month, day: 0(sun) ~ 6(sat)
console.log(date.getFullYear()); // 2022
console.log(date.getMonth()); // 9
console.log(date.getDay()); // 4

// hours
console.log(date.getDay()); // 4
console.log(date.getHours()); // 13
console.log(date.getUTCHours()); // 4

// getTime: (now - date(0)) milliseconds
// getTimezoneOffset: (UTC+0 - currentZone) minutes
console.log(date.getTime()); // 1665634167121
console.log(date.getTimezoneOffset()); // 540 */

// 날짜정보 설정

/* let date = new Date();

console.log(date);

// year, month
let ms_year = date.setFullYear(2020, 3, 15);
console.log(date);
console.log(new Date(ms_year));

// date
date.setDate(1);
console.log(date);
date.setDate(0);
console.log(date);

// hours, minutes, seconds
date.setHours(date.getHours() + 2);
console.log(date); */

// parse
// 날짜 정보 설정
// 문자열 기반 날짜 정보 설정

/* let ms_parse = Date.parse("2020-03-31T00:00:00.000");

console.log(ms_parse);
console.log(new Date(ms_parse));

console.log(new Date(Date.parse("2020-03-31T00:00:00.000"))); */

// benchmark
// 벤치마크 측정 대상 함수 전후로 시간을 비교하여 알고리즘 성능 측정할때 사용법

/* function dateSub(old_date, new_date) {
  return new_date - old_date;
}

function getTimesub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
  let date_1 = new Date("2020-01-01");
  let date_2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    callback_func(date_1, date_2);
  }
  return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms"); // dateSub: 18ms
console.log("getTimesub: " + benchmark(getTimesub) + "ms"); // getTimesub: 3ms */

// N차원 array
// 배열 안에 N개 만큼의 배열이 존재하는 객체
// 2/3차원 지도 정보, RGB를 저장하는 2차원 사진 파일 등을 표현할 때 활용 가능

/* let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

console.log(array[0]); // [ 101, 102, 103 ]
console.log(array[1][0]); // 201
console.log(array[2][2]); // 303

let arr_2 = array.pop();
console.log(array.length); // 2
console.log(arr_2); // [ 301, 302, 303 ]
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]

let array_num = array.push([401, 402, 403]);
console.log(array.length); // 3
console.log(array_num); // 3
console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ] */

// 2차원 배열 반복문 예제
// 이중 for loop를 사용한 2차원 배열 접근

let array = [
  [101, 102, 103],
  [201, 202, 203],
  [301, 302, 303],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}

// 101 ... 303

let fruits = [
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
];

for (let i = 0; i < array.length; i++) {
  console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}
// fruit: strawberry, amount: 50
// fruit: banana, amount: 100
// fruit: ice, amount: 150
