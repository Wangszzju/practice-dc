let fs = require('fs');
// let writableStream = fs.createWriteStream('file2.txt');
// let readableStream = fs.createReadStream('file.txt').pipe(writableStream);

// let data = '';

// // readableStream.setEncoding('utf8');

// readableStream.on('data',function(chunk){
//   data+=chunk;
// });


// // 触发end事件会自动关闭
// readableStream.on('end',function(){
//   console.log(data);
// });

let text = fs.readFileSync('file2.txt','utf8');
console.log(text);