// const k = x => x * x;
// let arr = [0,1,2,3,4,5,6];
// arr = arr.filter(item=>{
//   return item > 2;
// })
// console.log(arr);
let fs = require('fs');

var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core')
  .transform(es6Code, {
    presets: ['es2015']
  })
  .code;
fs.writeFileSync('./result-for-code.js',es5Code);