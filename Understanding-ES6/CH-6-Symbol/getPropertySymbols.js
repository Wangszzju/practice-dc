const xiaoming = { };
const age = Symbol('age')

Object.defineProperties(xiaoming, {
  name: {
    value: 'xiaoming',
    enumerable: true
  },
  height: {
    value: 180,
    enumerable: false
  },
  [age]: {
    value: 22
  }
})

Object.keys(xiaoming);  // ["name"]
Object.getOwnPropertyNames(xiaoming);  // ["name", "height"]
Object.getOwnPropertySymbols(xiaoming);  // [Symbol(age)]