
const toString = Object.prototype.toString;
const isType = function(type){
  return function (obj) {
    return toString.call(obj) == `[object ${type}]`;
  }
};
let isString = isType('String');
let k = isString('2333');
console.log(k);