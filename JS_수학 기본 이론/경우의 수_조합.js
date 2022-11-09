/*  
조합 (combination)
  - 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관 없이 나열하는 경우의 수 (nCr)
  - 4개의 숫자 카드에서 2개를 뽑는 경우의 수
*/

// 조합 예제 (1) - For

console.log("-".repeat(10) + "\n" + "조합 예제 (1) - For" + "\n " + "-".repeat(10));

let input = [1, 2, 3, 4];
let count = 0;

function combinationFor(arr) {
  // i = 3 -> value 4 지만 내부 for문으로 필터링 되기때문에 4 예외처리 안함 : i < arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combinationFor(input);
console.log(count);



// 조합 예제 (2) - 재귀

console.log("-".repeat(10) + "\n" + "조합 예제 (2) - 재귀" + "\n " + "-".repeat(10));

let arr = [1, 2, 3, 4];
let output = [];
let cnt = 0;

function combinationRe(arr, data, s, idx, r) {
  if (s == r) {
    count++;
    console.log(data);
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combinationRe(arr, data, s + 1, i + 1, r);
  }
}

combinationFor(input, output, 0, 0, 2);
console.log(cnt);
