// 同步追加
let fs = require('fs');
fs.writeFileSync('target.txt','打野不蹲草丛\n','utf-8');
fs.appendFileSync('target.txt','打野蹲草丛\n','utf-8');