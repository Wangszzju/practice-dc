'use strict'


function ObserverList(){
  this.observerList = []; // 为什么用数组？因为方便添加／删除／修改／遍历／查询
}
// 添加操作，注意这些操作不会变量提升
ObserverList.prototype.add = function(observer){
  return this.observerList.push(observer);
};
// 删除操作
ObserverList.prototype.remove = function(index){
  return this.observerList.splice(index,1);
};

// 
ObserverList.prototype.count = function(){
  return this.observerList.length;
};

ObserverList.prototype.get = function(index){
  if(index > -1 && index < this.observerList.length){
    return this.observerList[index];
  }
};

// 定义被观察者
function Subject(){
  this.observers = new ObserverList();  // 自带观察者，你们来看我啊！
};

Subject.prototype.addObserver = function(observer){
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer){
  this.observers.remove(this.observers.indexOf(observer,0));  // 用indexOf获取observer的位置
};

Subject.prototype.notify = function(content){
  let l = this.observers.count();
  for(let i = 0 ; i < l ; i++){
    this.observers.get(i).update(content);
  }
};

function Observer(){
  this.update = function(content){
    // 根据需要来重写
  }
}


var input = document.getElementById( "input" );
var addBtn = document.getElementById( "addNewObserver" );
var container = document.getElementById( "observersContainer" );

input = extend(input, new Subject());

input.addEventListener('input',function(e){
  input.notify(input.value);
})

addBtn.addEventListener('click',function(e){
  let li = document.createElement('li');
  li.innerHTML = '呵呵哒～';
  li = extend(li, new Observer());
  li.update = function(value){
    this.innerHTML = 'The Value is ' + value + ' in ' + new Date(); 
  };
  input.addObserver(li);
  container.appendChild(li);
});

function extend(target, extension){
  for(let key in extension){
    target[key] = extension[key];
  }
  return target;
}
