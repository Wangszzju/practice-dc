let events = require('events');
let EventEmitter = events.EventEmitter;

let obj = {
  hello:function(content){
    content = content || 'sb' ;
    console.log('哈哈 ' + content);
  }
};

let emitter = Object.assign(new EventEmitter(), obj);
let emitter2 = new EventEmitter();

emitter.on('ok',emitter.hello);

setTimeout(() => {
  emitter.emit('ok','yoho～');
  console.log('sb');
},400);