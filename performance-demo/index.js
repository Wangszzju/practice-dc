#!/usr/bin/env node

let cb = function(item){
  return item;
}


let autoRun = function(arr,cb){
  return arr.map(cb)
}

let manualRun = function(arr,cb){
  let newArr =[];
  for(let i = 0;i < arr.length ;i++){
    newArr.push(cb(arr[i]));
  }
}

let testSpeed = function(name,fn,times,arr,cb){
  let start = Date.now();
  for(let j = 1 ;j <= times;j++){
    fn(arr,cb);
  }
  let end = Date.now();
  console.log(`${name} cost ${end-start} ms`);
};
// 当运算次数到1000000*12＝12000W时，就需要大约6秒左右，何况这是
let times = 1000000;
let testArr = [0,1,2,3,4,5,6,7,8,9,10,11];
testSpeed('autoRun',autoRun,times,testArr,cb);
testSpeed('manualRun',manualRun,times,testArr,cb);