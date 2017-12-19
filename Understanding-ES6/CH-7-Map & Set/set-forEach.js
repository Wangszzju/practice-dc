const processor = {
  // 输出
  output(value){
    console.log(value);
  },
  // 遍历
  process(dataset){
    // 使用箭头函数可以保证this调用正确
    dataset.forEach((value, key) => {
      if(value === key){
        this.output(`${value} === ${key}`);
      }
    });
  }
}

const set = new Set([1,2,3])

processor.process(set);