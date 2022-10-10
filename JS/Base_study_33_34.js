// 고차함수
// 하나 이상의 함수를 매개변수로 취하거나 함수를 결과로 반환하는 함수
// 매개변수로 전달되는 함수는 콜백 함수(Callback function)

// sort() 문제와 한계점
// 문제점: 일의 자리 4가 10의 자리보다 뒤쪽에 정렬
// 원인: sort 메서드로 정렬될 때 배열의 요소가 일시적으로 문자열로 변경되어 발생

/* let nums = [1, -1, 4, 0, 2, 3, 10, 20, 12];

console.log(nums.sort());
// [-1,  0, 1, 10, 12, 2, 20, 3,  4]
console.log(nums.reverse());
// [4, 3, 20, 2, 12, 10, 1, 0, -1]


let ascending_order = function (x, y) {
  return x - y;
};

let decending_order = function (x, y) {
  return y - x;
};

console.log(nums.sort(ascending_order));
console.log(nums.sort(decending_order)); */

/* let fruits = ["apple", "Orange", "orange", "melon"];

console.log(fruits.sort());
// [ 'Orange', 'apple', 'melon', 'orange' ]
console.log(fruits.reverse());
// [ 'orange', 'melon', 'apple', 'Orange' ]

let ascending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (y > x) return -1;
  else return 0;
};

let decending_order = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (y < x) return -1;
  else return 0;
};

console.log(fruits.sort(ascending_order));
// [ 'apple', 'melon', 'orange', 'Orange' ]
console.log(fruits.sort(decending_order));
// [ 'orange', 'Orange', 'melon', 'apple' ] */

// 고차 함수 - 공용화
/* let ascending_order = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();
  return x > y ? 1 : -1;
};

let decending_order = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();
  return x < y ? 1 : -1;
};

let nums = [1, -1, 4, 0, 10, 20, 12];
let fruits = ["apple", "Orange", "orange", "melon"];

console.log(nums.sort(ascending_order));
console.log(nums.sort(decending_order));

console.log(fruits.sort(ascending_order));
console.log(fruits.sort(decending_order));
 */

// forEach()
// 배열 요소 별 콜백 함수 각각에 실행
// item: 배열 요소, index: 배열 위치, array: 배열

/* let nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

nums.forEach(function (i) {
  console.log(i);
}) */

// map()
// 배열 요소 별 함수 호출 및 결과를 배열로 반환

/* // for loop
let nums = [1, 2, 3, 4, 5];
let use_for_loop = [];

for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i] * 2);
}

// map
console.log(use_for_loop);

let use_map = nums.map(function (item) {
  return item * 2;
});

console.log(use_map); */

// find()
// 콜백 함수의 조건을 만족하는, 단 하나의 값만 반환

/* let user = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let find_job = user.find(function (user) {
  return user.job == false;
});

console.log(find_job);

let find_age = user.find(function (user) {
  return user.age >= 19;
});

console.log(find_age); */

// filter()
// 콜백 함수의 조건을 만족하는 값을 모두 배열로 반환

/* let user = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

let filter_job = user.filter(function (user) {
  return user.job == false;
});

console.log(filter_job);

let filter_age = user.filter(function (user) {
  return user.age >= 19;
});

console.log(filter_age); */

// reduce()
// 요소 별 함수 수행 누적 결과값 반환

let nums = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");

let sum = nums.reduce(function (accumulator, item, index, array) {
  console.log(accumulator, "\t\t", item, "\t\t", index);
  call_count++;
  return accumulator + item;
}, 0); // 이니셜 벨류 0부터

console.log(call_count);
console.log(sum);
