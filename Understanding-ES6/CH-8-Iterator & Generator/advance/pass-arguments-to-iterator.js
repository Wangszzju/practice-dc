function *createIterator(){
  let zero = 0;
  let first = yield 1;
  console.log(first);  // 4
  let second = yield zero + 2;
  console.log(second);   // undefined ???
  let third = yield second + 3;
  console.log(third);  // 10
  yield third + 5;
}

let iterator = createIterator();

console.log(iterator.next())
console.log(iterator.next(4))
console.log(iterator.next());  // {value: NaN, done: false}
console.log(iterator.next(10))