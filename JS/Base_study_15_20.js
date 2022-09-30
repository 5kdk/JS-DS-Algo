// 반복문 for
// 선언문(Init Expression), 조건문(Test Expression), 증감문(Update Expression) 형태로 이루어진 반복문
// 조건문이 fail이 되기 전까진 코드 블록을 계속적으로 반복 수행
// 선언문, 조건문, 증감문 자리에 공백 입력 가능

// for 예제

/* // output: 0 1 2
for (let i = 0; i < 3; i++) {
  console.log(i);

}

// output: 
for (let i = 10; i < 3; i++) {
  console.log(i);

}

// output: 0 1
let num = 0;
for (; num < 2;) {
  console.log(num);
  num++;
} */

// 2중 for문

/* for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} + ${j} = ${i + j}`);
  }
} */

// 반복문 for(확장)
// for ..in 반복문
// 객체의 key, value 형태를 반복하여 수행하는데 최적화 된 유형
// 첫번째부터 마지막까지, 객체의 키 개수 만큼 반복

/* // Example

const person = { fname: "John", lname: "Sena", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);
 */

// for ..of 반복문
// Collection 객체 자체가 Symbol.iterator 속성(property)을 가지고 있어야 동작 가능한 유형
// ES6에 새로 추가된 Collection 기반의 반복 구문
/* 
// Example
let language = "JavaScript";
text = "";

for (let x of language) {
  text += x;
  console.log(x);
}
 */

// 반복문 while
// 조건문이 참일 때 코드 블록을 계속해서 반복 수행하는 반복문
// for 문에 비해 선언문과 증감문 없이 loop를 수행하며, 무한 loop 등 수행 시 많이 사용
// 조건문을 코드 블록보다 아래로 옮긴 do...while 반복문도 존재 (최소 한번 수행이 필요할 때 많이 사용)

/* let i = 0;
//let i = 5; 출력 X
while (i < 3) {
  console.log(i);
  i++;
}

i = 0;
//let i = 5; 일단 최초 1회 출력
do {
  console.log(i);
  i++;
} while (i < 3); */

// 반복문 제어
// break
// 반복문 수행 시 코드 블록을 탈출할 때 사용되는 식별자
// 다중 반복문일 경우 가장 안쪽의 반복문을 종료
// Label을 통하여 다중 반복문을 한번에 종료 가능, Label : 반복문 앞에 콜론과 함께 쓰이는 식별자
// continue
// 반복문 수행 시 코드 블록 실행을 해당 라인에서 중지하고
// 블록 코드를 종료 시킨 후 반복문 내 명시된 조건 판단

/* // break ex
let text = "";
for (let i = 0; i < 10; i++) {
  if (i == 3) break;
  text = text + i;
}
console.log(text);

// continue ex
text = "";

for (let i = 0; i < 10; i++) {
  if (i == 3) continue;
  text = text + i;
}
console.log(text); */

// label 예제
// 프로그램 내 특정 영역을 지정하여 별도 이름을 붙이는 식별자
// break와 continue를 사용하는 반복문 안에서만 사용 가능하며, break나 continue 지시자 위에 있어야 함

for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    console.log(i + "*" + j + "=" + i * j);
    break;
  }
}
//output: 0*0=0 \n 1*0=0 \n 2*0=0

end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
    break end;
  }
}
// 2중 for 문 탈출 output: 0*0=0
// 코드의 가독성과 logic을 조금 망가트려서 현업에서 잘 사용하지 않음