let fs = require('fs');

function run(taskDef){
  // 迭代实现
  function step(){
    if(!result.done){
      if(typeof result.value === 'function'){
        result.value(function(err, data){
          if(err){
            task.throw(err);
            return;
          }
          result = task.next(data); // 这句话执行以后，contents的值才变为data的值，期间函数并未执行，而是停住了。
          step();
        });
      } else {
        result = task.next(result.value);
        step();
      }
    }
  }
  // 定义与初次执行任务
  const task = taskDef();
  let result = task.next();

  // 迭代初始化
  step();
}

function readFile(filename){
  return function(callback){
    fs.readFile(filename, callback);
  }
}


run(function*(){
  let contents = null;
  // 请思考contents的赋值时机，和next()方法执行的时机，两者的关系。
  contents = yield readFile('/Users/dachui 1/Documents/practice/Understanding-ES6/CH-8-Iterator & Generator/advance/async-task-runner.js')
  console.log(contents);
  console.log('Done');
});