let events = require('events');
let EventEmitter = events.EventEmitter;

class Cat extends EventEmitter {  // 继承一个EventEmitter对象
  constructor(args) {
    super();
    this.name = args.name;
  }
}

let Tom = new Cat({ name: 'Tom' });

Tom.on('sayHi', hello);

function hello(otherName = 'no-one', name2 = 'no-one') {
  console.log(`Hello ${this.name} and ${otherName} and ${name2}!`);
};

setTimeout(() => {
  Tom.emit('sayHi', 'Jerry');  // 
}, 400)