function *createIterator(){
  let first = yield 1;
  console.log(first);
  let second;

  try {
    second = yield first + 10
  } catch (error) {
    console.log(error);
    console.log(second);
    // let three = yield second + 3
    second = 7;
  }

  // 似乎second是new Error之内的值，即函数上一次的返回值
  // 换句话说，catch内部的东西并没有被执行
  let three = 3
  yield three + 3
}

const i = createIterator();

console.log(i.next());
console.log(i.next(4));
console.log(i.next(new Error(20)));
console.log(i.next());
