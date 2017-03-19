let obj1 ={
  name:'xiaoming',
  sex:'male'
}
var name = 'yaha';
function Sayname(obj){
  let name = obj.name;
  console.log(name);
}
Sayname(obj1);
console.log(name);
const k = x => x * x;