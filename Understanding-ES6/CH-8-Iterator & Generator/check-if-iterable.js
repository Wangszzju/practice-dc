function isIterable(obj){
  return typeof obj[Symbol.iterator] === 'function';
}

console.log(isIterable(new Map()));  // true
console.log(isIterable(new WeakMap()));  // false
console.log(isIterable('123'));  // true
console.log(isIterable({}));  // false
