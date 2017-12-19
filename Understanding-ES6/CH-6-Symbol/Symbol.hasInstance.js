const six =  6;
const seven = 7;


six instanceof Number;  // false
seven instanceof Number // true


function OddNumber(){
}

Object.defineProperty(OddNumber, Symbol.hasInstance, {
  value(v){
    return ((v instanceof Number) && (v % 2 !== 0));   // 返回值似乎必须是Boolean值
  }
})

const one = new Number(1);
const two = new Number(2);

console.log(`one instanceof OddNumber：${one instanceof OddNumber}`);
console.log(`two instanceof OddNumber：${two instanceof OddNumber}`);
