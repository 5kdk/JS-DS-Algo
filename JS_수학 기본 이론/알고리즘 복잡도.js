/* 
알고리즘 성능 평가 지표 ( 정확성, 작업량, 메모리 사용량, 최적성, 효율성(시간 복잡도, 공간복잡도) )

시간 복잡도
입력 크기의 값에 대해 단위 연산을 몇 번 수행하는지 계산하여, 알고리즘의 수행시간을 평가하는 방법
3가지 점근적 표현법
  - O 빅오(big-o) : 최악의 상황을 고려하여 성능 측정 결과 표현
  - Θ 쎄타(theta) : 평균적인 경우에서의 성능 측정 결과 표현
  - Ω 오메가(Omega) : 최선의 상황일 때의 성능 측정 결과 표현
 */

// 빅오 표기법 예제 (1)
function big_o(n) {
  let sum = 0;        // 1회

  sum = n * 2;        // 1회

  return sum;         // 1회
}                     // 3 -> O(1)

// 빅오 표기법 예제 (2)
function big_o(arr, n) {
  let sum = 0;                      // 1회

  for (let i = 0; i < n; i++) {     // n회
    sum += arr[i];
  }

  return sum;                       // 1회
}                                   // n + 2 -> O(N)


// 빅오 표기법 예제 (3)
function big_o(arr, n) {
  let sum = 0;                      // 1회

  for (let i = 0; i < n; i++) {     // n * n = n²
    for (let j = 0; j < n; j++){
      sum += arr[i][j];
    }
  }

  return sum;                        // 1회
}                                    // n² + 2 -> O(N²)  for문을 중첩해서 많이 사용은 되도록 지양


// 빅오 표기법 예제 (4)
function big_o(n) {
  let sum = 0;                      // 1회

  for (let i = 0; i < n; i*=2 ) {     // n / 2 회
    sum += 2;
  }

  return sum;                       // 1회
}                                   // n / 2 + 2 -> O(log N)

// Data Structure Operations 그림 참고
// Array Sorting Algorithms 그림 참고