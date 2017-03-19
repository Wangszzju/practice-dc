require('babel-polyfill');
let fs = require('fs');
var es5Code = require('babel-core')
  .transformFileSync('./es6code.js', {
    presets: ['es2015']
  })
  .code;
fs.writeFileSync('./result-for-polify.js',es5Code);