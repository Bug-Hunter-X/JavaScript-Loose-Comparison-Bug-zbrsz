function foo(a, b) {  return a === b; // Use strict equality}

//Example:
console.log(foo(1, '1')); // false with strict equality, true with loose comparison
console.log(foo(1, 1));   // true
console.log(foo(0, false)); // false with strict equality, true with loose comparison