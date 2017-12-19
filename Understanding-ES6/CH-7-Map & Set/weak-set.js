const errorUseSet = new WeakSet([1]);  // Invalid value used in weak set，传入原始值就会报错
const correctUseSet = new WeakSet([new Number(1)]); // WeakSet {Number}

let key = { name: 'lilei' };
const set = new WeakSet();
console.log(set.size);  // undefined，不支持size
console.log(set.forEach);  // undefined，不支持forEach迭代
console.log(Object.keys(set));  // []，不可以被迭代

const s = new Set();
console.log(s.size);  // 0

set.add(key);

key = null;