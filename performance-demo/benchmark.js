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

let BenchMark = require('benchmark');
let suite = new BenchMark.Suite();

let arr = [0,1,2,3,4,5,6];
suite.add('autoRun',function(){
  return arr.map(cb);
}).add('manualRun',function(){
  let newArr=[];
  for(let i = 0;i < arr.length;i++){
    newArr.push(cb(arr[i]));
  }
  return newArr;
}).on('cycle',function(event){
  console.log(String(event.target));
}).on('complete',function(){
  console.log('Fatest is'+this.filter('fastest').pluck('name'))
})