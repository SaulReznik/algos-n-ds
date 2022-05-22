function fib(prev1, prev2, num) {
  if (num <= 2) return prev2;
  return fib(prev2, prev1 + prev2, --num);
}

console.log(fib(1, 1,))
