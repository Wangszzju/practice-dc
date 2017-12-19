const list = {
  items: [1,2,3,4],
  *[Symbol.iterator](){
    for(let item in this.items){
      yield Number(item) + 10;
    }
  }
}

for(let i of list){
  console.log(i);
}

console.log(...list);  // 10 11 12 13
