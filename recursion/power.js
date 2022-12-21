function power(a, b) {
  if (!b) return 1;
  return a * power(a, --b);
}
