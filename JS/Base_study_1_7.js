/*  console.log("hello world!"); //python print
    const fs = require("fs");
    const input = fs.readFileSync("./input.txt", "utf8");

    console.log(input);
*/

/* 
    let 안녕 = "하세요"; // 안녕 = "하세요"
    let hi = "hello";
    let HI = "HELLO";

    console.log(안녕); // print(안녕)
    console.log(hi);
    console.log(HI);
*/
/*
    let A = 123;
    console.log(A);

    A = 456;
    console.log(A);
*/

// let A = 789; // Syntax error 이미 선언된 변수 A

/* 
    상수
    변경 불가능한 값을 저장하기 위한 기억 공간
    중복 선언 불가
    키워드 : const
*/

/*
    const B = 123; // 상수 선언 및 값 초기화
    console.log(B); // output : 123

    // B = 456; // 값 재할당 -> type error

    const C; // 초기화 없이 상수 선언 -> Syntax Error
    C = 123;
*/

/*
    // 선언 후 할당
    let hi;
    hi = "hello";

    // 선언과 동시에 초기화
    let galo = "hello!";

    // 한 줄에 여러 변수 선언하고 초기화
    let name = "john",
    age = 123,
    msg = "hello";

    // 상수는 보통 대문자로 표기
    const TESTCASE = 5;
    const BIRTHDAY = '2000.1.1';

    console.log(age);
    console.log(BIRTHDAY);
*/

/*  호이스팅 (Hoisting)
    코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어 올리는 작업
    var의 변수/함수의 선언만 위로 올려지고, 할당은 올려지지 않음
    let/const 변수 선언과 함수 표현식에서는 호이스팅 발생하지 않음
*/

//using var
console.log(name_1);
var name_1 = "john";
console.log(name_1);

//hoisting
var name_2;
console.log(name_2);
name_2 = "john";
console.log(name_2);

console.log(name_3);
let name_3 = "john"; // ReferenceError: Cannot access 'name_3' before initialization
