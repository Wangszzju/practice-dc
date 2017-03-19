#!/usr/bin/env node

let babel = require('babel-core');
let program = require('commander');
let fs = require('fs');

program.option('-7,--es7 [target]','执行ES7',transCompile);
program.parse(process.argv);
function transCompile(target){
  let resultStr = babel.transformFileSync(`./${target}.js`,
    { presets:[
      require.resolve('babel-preset-es2015'),
      require.resolve('babel-preset-stage-0'),
    ]}).code;
  fs.writeFileSync('./result.js',resultStr);
}
