const uid = Symbol.for('uid');
const desc = String(uid);

console.log(uid); // Symbol(uid)
console.log(desc); // "Symbol(uid)"

console.log(uid + '123')
// Uncaught TypeError: Cannot convert a Symbol value to a string
console.log(uid/1);
// Uncaught TypeError: Cannot convert a Symbol value to a number


console.log(!!uid);  // true