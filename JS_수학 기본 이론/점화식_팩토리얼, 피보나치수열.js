// 팩토리얼 예제
console.log("-".repeat(10) + "\n" + "팩토리얼 예제" + "\n " + "-".repeat(10));

let result;

function recursiveFac(num) {
  if (num == 1) {
    return 1;
  }
  return recursiveFac(num - 1) * num;
}

result = recursiveFac(10);
console.log(result);

// 피보나치수열 예제 (첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열)
console.log("-".repeat(10) + "\n" + "피보나치수열 예제" + "\n " + "-".repeat(10));

function recursiveFS(num) {
  if (num == 1 || num == 0) {
    return num;
  }
  return recursiveFS(num - 1) + recursiveFS(num - 2);
}

result = recursiveFS(5);
console.log(result);
