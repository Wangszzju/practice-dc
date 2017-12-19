function createIterator(items){
  // 内部指针
  let i = 0;
  // 初次调用，返回一个迭代器对象
  return {
    // next方法，返回下一个值
    next(){
      // 结果对象
      const done = i >= items.length;
      return {
        value: !done ? items[i++] : undefined,
        done
      }
    }
  }
}

const iterator = createIterator([1,2,3]);

iterator.next();  // { value: 1, done: false }
iterator.next();  // { value: 2, done: false }
iterator.next();  // { value: 3, done: false }
iterator.next();  // { value: undefined, done: true }