function solution(A, B) {
  function isPrime(N) {
    if (N === 1) return false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % 2 === 0) return false;
    }
    return true;
  }

  function getPrimeFactor(n) {
    let re = "";
    let divider = 2;
    while (n != 1) {
      if (n % divider === 0) {
        n /= divider;
      } else {
        if (isPrime(divider)) re += divider;
        divider++;
      }
    }
    console.log(re);
    return re;
  }

  return getPrimeFactor(A) === getPrimeFactor(B) ? 1 : 0;
}

solution(9, 18);