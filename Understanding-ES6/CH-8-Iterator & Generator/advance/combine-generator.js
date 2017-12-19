function *createTextIterator(count) {
  for (let i = 0; i < count; i++) {
    yield i;
  }
}

function *createColorIterator(){
  const arr = ['red', 'yellow', 'orange'];
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
  return 3;
}

function *combinedIterator(){
  // yield后面可以跟一个iterator对象
  let result = yield *createColorIterator();  // 这里必须带*号
  yield *createTextIterator(result);
  yield 110;
}

const iterator = combinedIterator();