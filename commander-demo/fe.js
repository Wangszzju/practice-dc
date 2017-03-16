#!/usr/bin/env node --debug-brk

let program = require('commander');
program
  .option('-d, --date [year]', 'display current date',judgeYear)
  .parse(process.argv);

// let dt = new Date();
// if (!program.date) {
//   console.log(dt.getFullYear()
//     + '-'
//     + (dt.getMonth() + 1)
//     + '-'
//     + (dt.getDate())
//   );
// }

function judgeYear(year){
  if(Number(year) === 2017){
    console.log('2017年到啦！');
  }
  else {
    console.log('今年不是2017');
  }
}

// console.log(program.parse(process.argv));

// option的参数：
// '-d, --date' 分别为长短命令
// 'display current date'是描述信息，