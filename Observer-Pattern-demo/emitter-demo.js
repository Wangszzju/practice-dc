var EventEmitter = require('events').EventEmitter;   
var emitter = new EventEmitter();
 
emitter.on('sayHi', sayHi);
 

function sayHi(someone){
  console.log(someone);
}
 
emitter.removeListener('sayHi', sayHi);

emitter.on('sayHi', function(someone) {
    console.log(someone + '这个傻逼');
});
 
emitter.emit('sayHi','Hahah2');
// emitter.emit(eventName[, ...args]) args会按顺序被传递给每个绑定的函数

// Hahah2这个傻逼