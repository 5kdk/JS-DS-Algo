/* let str = "hello, world!";
console.log(typeof str); // output: string
console.log(typeof undefined); // output: undefined
console.log(typeof 123); // output: number
console.log(typeof 456n); // output: bigint
console.log(typeof 123.123); // output: number
console.log(typeof true); // output: boolean
console.log(typeof "hello"); // output: string
console.log(typeof Symbol("id")); // output: symbol
console.log(typeof Math); // output: object
console.log(typeof null); // output: object
console.log(typeof console.log); // output: function */

/* let name_check = true; // 네, name 입력이 확인되었습니다.

let age_check = false; // 아니오, age 입력이 확인되지 않았습니다.

let value_check = 10 > 3; // 비교 결과: 참 -> true

console.log(value_check); // output: true */

/* // null
// null은 값이 비어 있다는 의미로 표현되는 자료형
// 존재 하지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 나타내는데 사용
console.log(typeof null); // output:  <- 하위 버전 호환성으로 object 표기

const null_check = null;
console.log(null_check === null); // output: true
 */

// undefined
// undefined는 값이 할당되어 있지 않은 상태를 나타날 때 사용되는 자료형
// 변수 선언 후 초기화 하지 않는다면, undefined가 자동으로 할당

/* let name; // 할당 후 초기화 하지 않음

console.log(name); // output: undefined */

/* // Number

let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1 / 0;
let num_4 = 123456n; // BigInt("123456")

console.log(num_1 - num_2); // output: -0.456
console.log((num_1 - num_2).toFixed(3)); // output: -0.456
console.log(num_3);
console.log(num_1 / "hello");
console.log(typeof num_4); // bigint
 */

/* // string
// 역따옴표 (백틱, backtick): `hello` 변수 삽입 가능
let str_1 = "hello";
let str_2 = 'hello';

let num = 3;
let str_3 = `hello_${num}`;

console.log(str_3); */

// object
// object는 다수의 원시 자료형을 포함하거나 복잡한 개체(entity)를 표현할 수 있는 자료형
// object는 Object() 혹은 중괄호({})를 통해 생성
// object의 개체는 key: value 형태로 표현하며, 접근은 object.key 형태로 표현

// let user = {
//   name: "john", //
//   age: 27,
// };

// console.log(typeof user);
// console.log(typeof user.name);
// console.log(typeof user.age);

// console.log(user);
// console.log(user.name);
// console.log(user["name"]);
// console.log(user.age);

// user.age = 30;
// console.log(user.age);

// user.weight = 72;
// console.log(user);

// delete user.age;
// console.log(user);

// object의 값을 복사할 때는 대상 전체가 아닌 object 내 주소 값만 복사되는 문제 발생
// 가리키는 대상 전체를 복사하는 방법은 얕은 복사(shallow copy), 깊은 복사(Deep copy)를 통해 가능

// let admin = user;
// console.log(admin);

// admin.name = "park";
// console.log(admin.name);
// console.log(user.name); // john -> park

// user.age = 30;
// console.log(user.age);
// console.log(admin.age); // 27 -> 30

// 얕은 복사
// 얕은 복사의 문제점 객체 내 또 다른 객체가 있다면 복사되지 않음

/*
let admin = { ...user }; //{user.name, user.age}
*/

/* using Object
let admin = Object.assign({}, user);
*/

/* for loop
let admin = {};

for (let key in user) {
  admin[key] = user[key];
}
 */
// console.log(admin);

// admin.name = "park";
// console.log(admin.name);
// console.log(user.name); // john -> park

// user.age = 30;
// console.log(user.age);
// console.log(admin.age); // 27 -> 30

// 깊은 복사

let user = {
  name: "john", //
  age: 27,
  sizes: {
    height: 180,
    weight: 72,
  },
};

//let admin = { ...user }; // shallow copy problem
let admin = JSON.parse(JSON.stringify(user));

admin.sizes.height = admin.sizes.height + 1; // 180 -> 181
console.log(admin.sizes.height);
console.log(user.sizes.height);

admin.name = "park";
console.log(admin.name);
console.log(user.name); // john -> park

user.age = 30;
console.log(user.age);
console.log(admin.age); // 27 -> 30
