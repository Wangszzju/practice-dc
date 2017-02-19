let fs = require('fs');
// 异步
fs.writeFile('target.txt','Hey, Hello World\n','utf-8',function(err){
  if(err) throw err;
  console.log('Success')
})
// 追加
fs.appendFile('target.txt', '这特么是第二行了\n','utf-8', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
let obj = {
  name:'Tim Duncan',
  age:41,
  sex:'Male',
  position:'C'
}
fs.appendFile('target.txt', `${JSON.stringify(obj)}\n`,'utf-8', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

