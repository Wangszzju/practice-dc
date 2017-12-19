const playerEngine = {
  *createIterator(items) {
    for(let item of items){
      yield item
    }
  }
}

const iterator = playerEngine.createIterator(['Kobe', 'Duncan', 'Garrnet']);
iterator.next();   // { value: "Kobe", done: false }