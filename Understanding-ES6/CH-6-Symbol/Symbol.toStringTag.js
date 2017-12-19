function Person(){}

Person.prototype[Symbol.toStringTag] = 'Person Test';
Person.prototype.toString = function(){
  return 'It\'s a fixed toString function'
}k

const xiaoming = new Person;

xiaoming.toString();   // "It's a fixed toString function"
Object.prototype.toString.call(xiaoming);  // "[object Person Test]"