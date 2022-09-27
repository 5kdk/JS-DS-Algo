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

let name; // 할당 후 초기화 하지 않음

console.log(name); // output: undefined
