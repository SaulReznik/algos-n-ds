function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log('sum', fib(7));

function fibMemo(n, memo = []) {
  if(memo[n] !== undefined) return memo[n];
  if(n <= 2) return 1;
  const res = fibMemo(n-1, memo) + fibMemo(n-2, memo);
  memo[n] = res;
  return res;
};

function fibTable(n) {
  if (n <= 2) return 1;
  const arr = [0,1,1];
  for (let i = 3; i <= n; i++) {
      arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n];
}

console.log(fibTable(1000));
