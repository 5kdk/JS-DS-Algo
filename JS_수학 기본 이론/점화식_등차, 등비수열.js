/* 
  점화식 (=재귀식)

  점화식(재귀식)이란 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식
  대표적인 점화식
  - 등차 수열 : F(n) = F(n-1)+a     *a: 고정된 상수
  - 등비 수열: F(n) = F(n-1)*a
  - 팩토리얼 : F(n) = F(n-1)*n
  - 피보나치 수열 : Fn = F(n-1) + F(n-2)

*/

// 등차수열 예제 (1) - For
console.log("-".repeat(10) + "\n" + "등차수열 예제 (1) - For" + "\n " + "-".repeat(10));

let result;

function forloopAS(s, t, num) {
  // start, difference, number
  let acc = 0;

  for (let i = 1; i <= num; i++) {
    if (i == 1) {
      acc += s;
    } else {
      acc += t;
    }
    console.log("idx:", i, "|", "acc:", acc);
  }
  return acc;
}

result = forloopAS(3, 2, 5);
console.log(result);

// 등차수열 예제 (2) - 재귀
console.log("-".repeat(10) + "\n" + "등차수열 예제 (2) - 재귀" + "\n " + "-".repeat(10));

function recursiveAS(s, t, num) {
  // 멈출조건
  if (num == 1) {
    return s;
  }
  // 반복할 코드
  return recursiveAS(s, t, num - 1) + t;
}

// num: 5 => 9 + 2
// num: 4 => 7 + 2
// num: 3 => 5 + 2
// num: 2 => 3 + 2
// num: 1 => 3

result = recursiveAS(3, 2, 5);
console.log(result);

// 등비수열 예제 (1) - For
console.log("-".repeat(10) + "\n" + "등비수열 예제 (1) - For" + "\n " + "-".repeat(10));

function forloopGS(s, t, num) {
  let acc = 1;

  for (let i = 1; i <= num; i++) {
    if (i == 1) {
      acc *= s;
    } else {
      acc *= t;
    }
    console.log("idx:", i, "|", "acc:", acc);
  }
  return acc;
}

result = forloopGS(3, 2, 5);
console.log(result);

// 등비수열 예제 (2) - 재귀
console.log("-".repeat(10) + "\n" + "등비수열 예제 (2) - 재귀" + "\n " + "-".repeat(10));

function recursiveAS(s, t, num) {
  if (num == 1) {
    return s;
  }
  return recursiveAS(s, t, num - 1) * t;
}

result = recursiveAS(3, 2, 5);
console.log(result);
