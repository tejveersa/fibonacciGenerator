function *fibonacci(n) {
  const infinite = !n && n !== 0;
  let current = 0;
  let next = 1;
  
  while (infinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}

let [...sequence] = fibonacci(3);
console.log(sequence);
