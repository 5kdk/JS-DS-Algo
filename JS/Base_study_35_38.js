// 생성자 함수
// 유사한 객체를 다중으로 만들 때 사용되는 함수 (타 언어에서의 class 개념과 유사)
// 일반적으로 생성자 함수의 첫 글자는 대문자로 시작
// 생성자 함수로 객체 생성 시 new 연산자를 통해 객체 생성

/* // 빵틀
function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}

// 붕어빵
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("readbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3); */

// new.target
// .new.target 속성(property)를 사용하여 new와 함께 호출했는지 확인 가능

/* function User(name) {
  console.log(new.target);
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
}

let result_1 = User("john");
console.log(result_1);
let result_2 = new User("john");
console.log(result_2); */

// new.target 처리 추가

/* function FishBread(flavor, price) {
  if (!new.target) {
    return new FishBread(flavor, price);
  }
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3); */

// Collection
// 구조 혹은 비구조화 형태로 프로그래밍 언어가 제공하는 값을 담을 수 있는 공간

// Map
// 다양한 자료형의 key를 허용하고, key-value 형태의 자료형을 저장 가능할 수 있는 Collection
// Map은 Object 대비 비교하면 다양한 key의 사용을 허용하고, 값의 추가/삭제 시 메서드를 통해 수행이 필요함

/* let map = new Map();

map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");
console.log(map);

console.log(map.get(123));
console.log(map.get("name"));
console.log(map.get(true));
console.log(map.size);

map.delete(123);
console.log(map);
map.clear();
console.log(map);

map.set(123, 456).set(false, "bool_type").set("fruit", "banana");
console.log(map); */

// Map 반복문
// Collection 객체인 Map이 가지고 있는 iterator 속성을 이용하여 for ... of 구문을 통해 반복문 수행 가능

/* let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (let item of recipe_juice.keys()) {
  console.log(item);
}

for (let amount of recipe_juice.values()) {
  console.log(amount);
}

for (let entity of recipe_juice) {      // recipe_juice.entries 동일
  console.log(entity);
} */

// Map <-> Object 변환
// Object.entries(Object), Object.fromEntries(Map)를 통해 Map과 Object 간 변환이 가능

/* let recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

console.log(recipe_juice);

let recipe_juice_obj = Object.fromEntries(recipe_juice);
let recipe_juice_kv = Object.entries(recipe_juice_obj);
let recipe_juice_map = new Map(recipe_juice_kv);

console.log(recipe_juice_obj);
console.log(recipe_juice_kv);
console.log(recipe_juice_map); */

// Set
// value만을 저장하며 중복을 허용하지 않는 Collection, 중복된 데이터를 제거할 때 주로 사용

// 요소 추가/삭제
// 요소 추가: Set.add(value), 요소 존재 여부: Set.has(value), 요소 삭제: Set.delete(value)

/* let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set);
console.log(num); // { 1, 2, 3, 4, 5 }
console.log(str); // { 'H', 'e', 'l', 'o', '!' }

set.add(1).add(1).add(10).add(20);
console.log(set);

console.log(set.has(10)); // true
console.log(set.has(2)); // false

console.log(set.delete(1)); // true
console.log(set.delete(-1)); // false
console.log(set); // Set(2) { 10, 20 } */


// Set 반복문
// Collection 객체인 Set이 가지고 있는 iterator 속성을 이용하여 for ... of 구문을 통해 반복문 수행 가능

let str = new Set("Hello!");

console.log(str);

for (let item of str) { // Method를 호출하지 않고 주로 사용
  console.log(item);
}

for (let item of str.keys()) {
  console.log(item);
}

for (let item of str.values()) {
  console.log(item);
}

for (let item of str.entries()) {
  console.log(item);
}
// Map과의 호환성을 위해 kv로 호출
// [ 'H', 'H' ]
// [ 'e', 'e' ]
// [ 'l', 'l' ]
// [ 'o', 'o' ]
// [ '!', '!' ]



