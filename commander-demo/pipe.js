#!/usr/bin/env node --debug-brk
let program = require('commander');

program
.command('console <name>')
.description('输出名字')
.action(function(name){
  console.log('输入的名字是：' + name );
});
// 记得要解析
program.parse(process.argv);