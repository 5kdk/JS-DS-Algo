/* 
경우의 수

어떤 사건 혹은 일이 일어날 수 있는 경우의 가짓수를 수로 표현
일상 생활에서의 경우의 수
  - 주사위 : 던지는 결과, 1 ~6 사이의 숫자이므로 경우의 수는 6
  - 윷: 던지는 결과, 도, 개, 걸, 윷, 모 이므로 경우의 수는 5
  - 가위바위보 : 게임 결과, 가위, 바위, 보 중에 하나를 낼 수 있으므로 경우의 수는 3
  - 동전 : 던지는 결과, 앞면 혹은 뒷면이므로 경우의 수는 2

완전탐색으로 경우의 수를 푸는 알고리즘
- 순열 : 서로 다른 n개의 원소 중에서 r을 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수(nPr)
- 조합 : 서로 다른 n개의 원소 중에서 r을 중복 없이 골라 순서에 상관 없이 나열하는 경우의 수(nCr)
- 중복 순열 : 서로 다른 n개의 원소 중에서 r을 중복 있게 골라 순서에 상관 있게 나열하는 경우의 수(nH)
*/

/*  
순열 (Permutation)
  - 순열 : 서로 다른 n개의 원소 중에서 r을 중복 없이 골라 순서에 상관 있게 나열하는 경우의 수(nPr)
  - 3개의 알파벳으로 단어를 만드는 경우의 수
  */

// 순열 예제 (1) - For

console.log("-".repeat(10) + "\n" + "순열 예제 (1) - For" + "\n " + "-".repeat(10));

let input = ["a", "b", "c"];
let count = 0;

function PermutationFor(arr) {
  // for i -> 첫번째 위치시킬 요소 a, b, c [i, 0, 0]
  for (let i = 0; i < arr.length; i++) {
    // for j -> 두번째 index 위치시킬 요소 [i, j, 0]
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      // for j -> 두번째 index 위치시킬 요소 [i, j, k]
      for (let k = 0; k < arr.length; k++) {
        if (i === k) continue;
        if (j === k) continue;

        console.log(arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

PermutationFor(input);
console.log(count);


// 순열 예제 (2) - 재귀

console.log("-".repeat(10) + "\n" + "순열 예제 (2) - 재귀" + "\n " + "-".repeat(10));

let arr = ["a", "b", "c"];
let cnt = 0;

function PermutationRe(arr, s, r) {
  // 배열, 시작위치, 몇개를 뽑을지
  // 1. 재귀함수를 멈춰야할 조건
  if (s === r) {
    cnt++;
    console.log(arr.join(" "));
    return;
  }

  // 2. 재귀를 돌면서 변경되어야 될 부분/메인로직
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; //swap
    PermutationRe(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; //원상복귀
  }
  /*

  s = 0, r = 2, i = 0 ["a", ]
  s = 1, r = 2, i = 1 ["a", "b", ]
  s = 2, r = 2 ["a", "b", "c", ]
  ...
  s = 1, r = 2, i = 2 ["a", "c", ]
  s = 2, r = 2 ["a", "c", "b"]
  s = 1, r = 2, i = 2 ["a", "b", ]
  ...
  s = 0, r = 2, i =1 ["b", "a", "c"]
  s
  ...
  s = 0, r = 2, i = 2 ["c", ]

   */
}

PermutationRe(arr, 0, 2);
console.log(cnt);

/* 
추가
Tree 구조로 접근하면 더 이해하기 쉽다

백트랙킹 패턴

a.반복 - 주어진 인풋 엘리먼트들에 반복문 돌리기
b.선택 - 탐색타겟을 설정/선택 을 통해 엘리먼트 순서 교체
c.탐색 - DFS 를 활용해 탐색 실행
d.선택취소 - 선택 과정 다시 복구하기 (undo)
*/
