// 문제
// 두 정수를 입력 받아 가장 큰 값을 출력해주는 함수를 작성하시오.

// 템플릿 코드

/* function MAX(x, y) {
  // 구현필요
}

console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100, 7)); */

/* function MAX(x, y) {
  return x > y ? x : y;
}

console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100, 7));
 */

function MAX(x, y) {
  if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else return NaN;
}

console.log(MAX(0, 3));
console.log(MAX(-1, 5));
console.log(MAX(100, 7));
console.log(MAX(100, 100));
