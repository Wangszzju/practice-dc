const firstName = Symbol('first name');  // Symbol(first name)，注意到是没有''符号的
const person = {};

person[firstName] = 'Nicholas';

console.log(person[firstName]);