/*
let str = "hello, world!";
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
console.log(typeof console.log); // output: function 
*/

/*
let name_check = true; // 네, name 입력이 확인되었습니다.

let age_check = false; // 아니오, age 입력이 확인되지 않았습니다.

let value_check = 10 > 3; // 비교 결과: 참 -> true

console.log(value_check); // output: true
*/

// null
// null은 값이 비어 있다는 의미로 표현되는 자료형
// 존재 하지 않는(nothing), 비어 있는(empty), 알 수 없는(unknown) 값을 나타내는데 사용

/*
console.log(typeof null); // output:  <- 하위 버전 호환성으로 object 표기

const null_check = null;
console.log(null_check === null); // output: true
 */

// undefined
// undefined는 값이 할당되어 있지 않은 상태를 나타날 때 사용되는 자료형
// 변수 선언 후 초기화 하지 않는다면, undefined가 자동으로 할당

/*
let name; // 할당 후 초기화 하지 않음

console.log(name); // output: undefined
*/

// Number
/*
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

// string
// 역따옴표 (백틱, backtick): `hello` 변수 삽입 가능
/*
let str_1 = "hello";
let str_2 = 'hello';

let num = 3;
let str_3 = `hello_${num}`;

console.log(str_3);
*/

// object
// object는 다수의 원시 자료형을 포함하거나 복잡한 개체(entity)를 표현할 수 있는 자료형
// object는 Object() 혹은 중괄호({})를 통해 생성
// object의 개체는 key: value 형태로 표현하며, 접근은 object.key 형태로 표현

/*
let user = {
  name: "john", //
  age: 27,
};

console.log(typeof user);
console.log(typeof user.name);
console.log(typeof user.age);

console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user.age);

user.age = 30;
console.log(user.age);

user.weight = 72;
console.log(user);

delete user.age;
console.log(user);
*/

// object의 값을 복사할 때는 대상 전체가 아닌 object 내 주소 값만 복사되는 문제 발생
// 가리키는 대상 전체를 복사하는 방법은 얕은 복사(shallow copy), 깊은 복사(Deep copy)를 통해 가능

/*
let admin = user;
console.log(admin);

admin.name = "park";
console.log(admin.name);
console.log(user.name); // john -> park

user.age = 30;
console.log(user.age);
console.log(admin.age); // 27 -> 30
*/

// 얕은 복사
// 얕은 복사의 문제점 객체 내 또 다른 객체가 있다면 복사되지 않음

/*
let admin = { ...user }; //{user.name, user.age}
*/

/*
using Object
let admin = Object.assign({}, user);
*/

/*
for loop
let admin = {};

for (let key in user) {
  admin[key] = user[key];
}
*/

/*

console.log(admin);

admin.name = "park";
console.log(admin.name);
console.log(user.name); // john -> park

user.age = 30;
console.log(user.age);
console.log(admin.age); // 27 -> 30
*/

// 깊은 복사

/*
let user = {
  name: "john", //
  age: 27,
  sizes: {
    height: 180,
    weight: 72,
  },
};

// let admin = { ...user }; // shallow copy problem
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
*/

// 형 변환
// 자바스크립트는 느슨한 타입 언어 혹은 동적 타입 언어로 변수의 자료형을 명시적으로 선언할 필요가 없는 언어
// 연산자로 인한 계산이나 변수에 전달되는 값은 자동으로 암묵적 형 변환 수행
// 강제적 형 변환을 위해서는 자료형 함수를 이용해 명시적 형 변환 수행

// string 예제
/*
console.log(String(123));
console.log(String(1 / 0));
console.log(String(-1 / 0));
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
console.log(String("5kdk"));
*/
/*
console.log(typeof String(123));
console.log(typeof String(1 / 0));
console.log(typeof String(-1 / 0));
console.log(typeof String(NaN));
console.log(typeof String(true));
console.log(typeof String(false));
console.log(typeof String(undefined));
console.log(typeof String(null));
console.log(typeof String("5kdk"));
*/

// Number 예제
// Number는 정수와 실수를 모두 포함하는 자료 형 변환이므로, 정수 혹은 실수의 명시적 변환은 parse 함수 사용
// 정수 변환: parseint(피연산자), 실수 변환:parseFloat(피연산자)

/*
console.log(Number("")); // output: 0
console.log(Number("123")); // output: 123
console.log(Number("hello")); // output: NaN
console.log(Number("123hello")); // output: NaN
console.log(Number(true)); // output: 1 
console.log(Number(false)); // output: 0
console.log(Number(null)); // output: 0
console.log(Number(undefined)); // output: NaN

// console.log(parseInt("123.123"));
// console.log(parseFloat("123.123"));

console.log(typeof parseInt("123.123")); // Number
console.log(typeof parseFloat("123.123")); // Number
*/

// Boolean 예제
/*
console.log(Boolean("")); // output: false
console.log(Boolean("123")); // output: true
console.log(Boolean("hello")); // output: true
console.log(Boolean("0")); // output: true
console.log(Boolean(0)); // output: false
console.log(Boolean(123)); // output: true
console.log(Boolean(NaN)); // output: false
console.log(Boolean(null)); // output: false
console.log(Boolean(undefined)); // output: false
*/

// 연산자

// 산술 연산자
/*
console.log(31 + 10);
console.log(31 - 10);
console.log(31 * 10);
console.log(31 / 10);
console.log(parseInt(31 / 10)); // 나눗셈 몫
console.log(31 % 10); // 나머지 연산자
console.log(2 ** 3); // 거듭제곱 연산자
*/

// 대입연산자: =
/*
let num_1 = 123;
let num_2 = 456;
let str_1 = "hello";
let str_2 = "world";

let num_3, str_3;

num_3 = num_1 + num_2
str_3 = str_1 + str_2

console.log(num_3);
console.log(str_3);

let num_4 = num_1 - num_2
console.log(num_4);
*/

/*
let num = 10;

let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 31;

// 복합 대입 연산자: +=
result_1 += num; // result_1 = result_1 + num;
console.log(result_1);

// 복합 대입 연산자: -=
result_2 -= num; 
console.log(result_2);

// 복합 대입 연산자: *=
result_3 *= num;
console.log(result_3);

// 복합 대입 연산자: /=
result_4 /= num;
console.log(result_4);

// 복합 대입 연산자: /=
result_5 %= num;
console.log(result_5);
*/

// 증가 감소 연산자
// 숫자 1만큼 증가시키거나 감소시킬 때 사용되는 연산자
// 증가연산자: ++(피연산자), (피연산자)++;
// 감소 연산자: --(피연산자), (피연산자)--;
// 위치 주의

/*
let num, result;

num = 10;
result = num++; // 다음 행부터 적용 result에는 10이 담김
console.log(result); // output: 10
console.log(num); // output: 11

num = 10;
result = ++num; // 현재 행에서 바로 작용 result에 11
console.log(result); // output: 11
console.log(num); // output: 11

num = 10;
result = num--;
console.log(result); // output: 10
console.log(num); // output: 9

num = 10;
result = --num;
console.log(result); // output: 9
console.log(num); // output: 9
*/

// 비교 연산자
// 좌항과 우항의 피연산자를 비교한 다음 결과값을 논리적 자료형으로 반환하는 연산자
// ==은 단순 값의 같음을 비교하는 동등 비교, ===는 자료형까지 같음을 판단하는 일치 비교 연산자

/*
console.log("ZA" > "AAAA");

console.log("Hello" < "Hi");

console.log("Hello" >= "Helloo");

console.log("5" <= 10);

console.log(true == 1);

console.log(false != 123);

console.log(true === 1);

console.log(false !== 123);
*/

// 논리 연산자
// 좌항과 우항의 피연산자 간 논리 값을 연산하여 참 또는 거짓을 결과로 얻는 연산자
// 논리 연산자: &&(AND), ||(OR),!(NOT)

/*
console.log(true || false); // true

console.log(Boolean(0 || false)); // false

console.log(Boolean(123 || false)); // true

console.log(Boolean(123 && 0)); // false

console.log(Boolean(false && true)); // false

console.log(Boolean(true && 3)); // true

console.log(Boolean(0 && false)); // false

console.log(!false); // false의 반대 true

console.log(!123); // true에 대한 반대 false
*/