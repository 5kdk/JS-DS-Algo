// 배열
// 여러 개체(Entity)값을 순차적으로 나열한 자료 구조
// 배열 내 값을 요소(element)라고 하며, 배열 요소는 index로 접근

/* let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruits = ["apple", "orange", "melon"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "kiwi";
console.log(fruits); */

// 배열의 실체
// 자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
// 메모리가 연속적인 밀집 배열(dense array)가 아닌 비 연속적인 희소 배열(sparse array)

/* let nums = [];

nums.push("one");
nums.push("two");
console.log(nums.length); // output: 2
console.log(nums); // output: [ 'one', 'two']

nums["once"] = "once";
nums["twice"] = "twice";
console.log(nums.length) // output: 2
console.log(nums); // output: [ 'one', 'two', once: 'once', twice: 'twice' ]

console.log(Object.getOwnPropertyDescriptors(nums)); */
/* {
  '0': {
    value: 'one',
    writable: true,
    enumerable: true,
    configurable: true
  },
  '1': {
    value: 'two',
    writable: true,
    enumerable: true,
    configurable: true
  },
  length: { value: 2, writable: true, enumerable: false, configurable: false },
  once: {
    value: 'once',
    writable: true,
    enumerable: true,
    configurable: true
  },
  twice: {
    value: 'twice',
    writable: true,
    enumerable: true,
    configurable: true
  }
} */

// 배열 타입 확인 및 요소 삭제

/* let num = 123.456;
let str = "here i am";
let fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruits));

console.log(fruits);
console.log(fruits.length);

delete fruits[1];
console.log(fruits);
console.log(fruits.length); // [ 'apple', <1 empty item>, 'melon' ] - 배열 삭제시 delete를 사용할 때 발생하는 문제
*/

// 배열 조작
// (LIFO - Back)
// 배열 추가:Array.pust(element), 배열 삭제:Array.pop()

/* let fruits = ["apple", "orange", "melon"];

ret = fruits.push("watermelon"); // 맨 뒤 요소에 추가
console.log(fruits);
console.log(ret); // push에 대한 return value는 배열의 길이

ret = fruits.pop(); // 맨 뒤 요소 삭제
console.log(fruits);
console.log(ret); // pop에 대한 return value는 배열의 요소 */

// (LIFO - Front)
// 추가:Array.unshift(element), 삭제:Array.Shift()

/* let fruits2 = ["apple", "orange", "melon"];

ret = fruits2.shift("watermelon"); // 맨 앞 배열 삭제
console.log(fruits2);
console.log(ret);

ret = fruits2.unshift("watermelon"); // 맨 앞 배열 추가
console.log(fruits2);
console.log(ret); */

// 배열 조작 - 2
// 배열 삭제/변경(index)
// Array.splice(index[, deleteCount, elem1, ..., elemN])
// 원본 객체 영향

/* let fruits = ["apple", "orange", "melon"];

console.log(fruits.splice(1)); // ['orange', 'melon'];
console.log(fruits); // [ 'apple' ]

fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.splice(1, 1)); // [ 'orange' ]
console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]

console.log(fruits.splice(1, 1, "mango", "kiwi")); // [ 'melon' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'strawberry' ] */

// 배열 조작 - 3
// 배열 삭제 (index)
// 배열 요소 삭제: Array.slice([start], [end])

/* let fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1)); // ['orange', 'melon'];
console.log(fruits); // [ 'apple', 'orange', 'melon' ]; 원본 데이터 유지

console.log(fruits.slice(1, 2)); // ['orange'];
console.log(fruits.slice(-2)); // ['orange', 'melon'];


// 배열 병합

console.log(fruits.concat("strawberry"));
console.log(fruits.concat(["cherry", "banana"]));
console.log(fruits.concat(["cherry", "banana"], "mango")); 
console.log(fruits); // 원본 데이터 유지 확인 */

// 배열 반복문

/* let fruits = ["apple", "orange", "melon"];

// 1. use for (index)
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 2. use for ...(element) of
for (let fruit of fruits) {
  console.log(fruit);
}
// 3. use for ...(key) in
for (let key in fruits) {
  console.log(fruits[key]);
} */

// 배열 탐색/변형
// index 탐색(앞에서 부터): Array.indexOf(item, from)
// index 탐색(뒤에서 부터): Array.lastindexOf(item, from)
// 값 포함 여부 확인: Array.includes(item, from)

/* let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange")); // output: 1
console.log(fruits.indexOf("Orange")); // output: -1
console.log(fruits.indexOf("orange", 2)); // output: 3 - 2번째 부터 찾아라 두번째 orange의 index

console.log(fruits.lastIndexOf("orange")); // output: 3
console.log(fruits.lastIndexOf("orange", -3)); // output: 1
console.log(fruits.lastIndexOf("orange", 0)); // output: -1

console.log(fruits.includes("banana")); // output: true
console.log(fruits.includes("Banana")); // output: false
console.log(fruits.includes(0)); // output: false */

// 배열 변형
// 배열 정렬: Array.sort(), 배열 반전:Array.reverse()

let nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort());
console.log(nums.reverse());

// 배열 변환
// 배열 값을 문자열로 변환: Array.join(separator)

let fruits = ["apple", "orange", "banana", "melon"];
let str = fruits.join();
console.log(fruits);
console.log(str); // apple,orange,banana,melon

let str_separator = fruits.join(";");
console.log(str_separator); // apple;orange;banana;melon
let result = str_separator.split(";"); // [ 'apple', 'orange', 'banana', 'melon' ]
console.log(result);

