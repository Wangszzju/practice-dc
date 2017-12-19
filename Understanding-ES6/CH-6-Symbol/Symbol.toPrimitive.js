const ab = new String('ab');

ab === 'ab'; // false
ab.valueOf() === 'ab';  // true
ab == 'ab';  // true'

function Temperature (degrees){
  this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function(hint){
  switch (hint) {
    case 'number':
      return this.degrees;  // 暴露出去的值
      break;
    case 'string':
      return `${this.degrees}\u00b0`
      break;
    default:
      return this.degrees;
      break;
  }
}

const freezing = new Temperature(32);

console.log(freezing + '!');
console.log(freezing == '32');
console.log(freezing == 32);
console.log(freezing / 2);
console.log(freezing + 1);
console.log(String(freezing));
console.log(Number(freezing));
console.log(Boolean(freezing));

