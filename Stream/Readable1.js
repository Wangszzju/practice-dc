let Readable = require('stream').Readable;

let rs = new Readable();
rs.push('yaha？\n')
rs.push('今天要说一个猫躺着也中枪的故事ho');
rs.push(null);  // 数据输入完毕

rs.pipe(process.stdout);