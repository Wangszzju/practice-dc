function *createIterator(){
  yield 2;
  yield 3;
  return 4
}

const i = createIterator()

i.next();
i.next();
i.next();  // {value: 4, done: true}
i.next();  // {value: undefined, done: true}

