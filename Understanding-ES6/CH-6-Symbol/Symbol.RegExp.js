const hasLengthOf10 = {
  [Symbol.match](value){
    return value.length === 10 ? [value.substring(2, 10)] : 'Not 10！';
  },
  [Symbol.replace](value, replacement){
    return value.length === 10 ? replacement + value.substring(10) : value;
  },
  [Symbol.split](value){
    return value.length === 10 ? value.split('') : value
  }
}

const message1 = 'Hello World';
const message2 = 'Hello John';

const match1 = message1.match(hasLengthOf10);
const match2 = message2.match(hasLengthOf10);

console.log(match1);  // Not 10！
console.log(match2);  // [ 'llo John' ]

const replace1 = message1.replace(hasLengthOf10, 'replace');
const replace2 = message2.replace(hasLengthOf10);

console.log(replace1); // 'Hello World'
console.log(replace2); // undefined

const split1 = message1.split(hasLengthOf10);
const split2 = message2.split(hasLengthOf10);

console.log(split1);   // Hello World
console.log(split2);   // [ 'H', 'e', 'l', 'l', 'o', ' ', 'J', 'o', 'h', 'n' ]