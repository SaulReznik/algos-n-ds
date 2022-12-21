function factorial(a) {
  if (!a) return 1;
  return a * factorial(--a)
}
