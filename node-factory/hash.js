#!/usr/bin/env node --debug-brk

'use strict'

let crypto = require('crypto');
let fs = require('fs');

function hashAlgorithm(alg){
  let hash;
  let file = './index.js';
  let content = fs.createReadStream(file);
  let hashSum = crypto.createHash(alg);

  content.on('data',function(chunk){
    hashSum.update(chunk);
  });

  content.on('end',function(){
    hash = hashSum.digest('hex');
    console.log(alg+' : '+ hash);
  });
};
hashAlgorithm('md5');
  