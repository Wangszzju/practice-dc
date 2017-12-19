const Person = (function(){
  const privateNameData = {};
  let privateId = 0;

  function Person(name){
    Object.defineProperty(this, '_id',{
      value: ++privateId
    });
    // 为每一个Person实例分配一个id
    // 在闭包中保存一个数据存储对象
    privateNameData[this._id] = {
      name
    }
  }
  Person.prototype.getName = function(){
    // 把id作为钥匙，要取数据就从这里面取
    return privateNameData[this._id].name;
  }

  return Person;
})()

const xiaoming = new Person('xiaoming');
console.log(xiaoming.name);  // undefined
console.log(xiaoming.getName());  // "xiaoming"