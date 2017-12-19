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
}

function *combinedIterator(){
  // yield后面可以跟一个iterator对象
  yield createTextIterator(2);
  yield createColorIterator();  // 不带*号的话，yield出去的将会是一个iterator，而不会将createTextIterator内部的值也yield出去。
  yield 110;
}

const iterator = combinedIterator();