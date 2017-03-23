function ObserverList(){
  this.observerList = []; // 为什么用数组？因为方便添加／删除／修改／遍历／查询
}
// 添加操作
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

Subject.prototype.addObserver= function(observer){
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

module.exports = {
  Observer,
  Subject
}


