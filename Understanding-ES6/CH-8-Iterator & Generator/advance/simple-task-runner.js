function run(taskDef){
  // 迭代实现
  function step(){
    if(!result.done){
      result = task.next();  // 覆盖新的值
      step();  // 继续执行
    }
  }
  // 定义与初次执行任务
  const task = taskDef();
  let result = task.next();

  // 迭代初始化
  step();
}

function *createTextIterator() {
  for (let i = 0; i < 4; i++) {
    console.log(`${i}：${i}`)
    yield i;
  }
}

run(createTextIterator);