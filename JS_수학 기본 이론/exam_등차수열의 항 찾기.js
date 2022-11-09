/* 문제: 등차 수열의 항 찾기

문제설명:
입력된 값을 통해서 등차 수열의 몇 번째 항인지를 구하는 프로그램을 작성하시오.
입력은 초항 a, 인접한 차이 d, 찾는 항의 수 n이 주어지며, n 값에 해당하는 항 번호를 반환한다.
단, 만약 항 번호가 없을 시에는 -1 를 반환한다.
예를 들어 a=1, d=2, n=7이 주어졌을때
f(1)=1, f(2)=3, f(3)=5, f(4)=7 이 되므로 n=7에 해당하는 항인 4를 반환한다.


입력값
1 2 7
2 3 10
3 5 23

출력값
#1 4
#2 -1
#3 5

*/

/* // user code

function answer(a, d, n) {
  let index = -1;

  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역

  return index;
} */

/* // main code

let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
 */

let input = [
  // TC: 1
  [1, 2, 7],
  // TC: 2
  [2, 3, 10],
  // TC: 3
  [3, 5, 23],
];

// 문제 풀이1

function answerOne(a, d, n) {
  let index = -1;

  let num;
  for (let i = 1; ; i++) {
    num = a + d * (i - 1);
    // 답 찾지 못함
    if (num > n) {
      index = -1;
      break;
    }
    // 답 찾음
    if (num == n) {
      index = i;
      break;
    }
  }
  return index;
}
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answerOne(input[i][0], input[i][1], input[i][2])}`);
}

// 문제 풀이2 - O(1) 연산

function answerTwo(a, d, n) {
  let index = -1;
  if ((n - a) % d == 0) {
    index = (n - a) / d + 1;
  } else index = -1;

  return index;
}


for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answerTwo(input[i][0], input[i][1], input[i][2])}`);
}
