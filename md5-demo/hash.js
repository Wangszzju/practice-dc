#!/usr/bin/env node 

'use strict'

let md5 = require('md5');
let fs = require('fs');

function hashAlgorithm(alg){
  let hash;
  let file = './home-imac.css';
  let content = fs.createReadStream(file);
  let data = '';

  content.on('data',function(chunk){
    data = data + chunk;
  });

  content.on('end',function(){
    hash = md5(data);
    console.log(alg+' : '+ hash);
  });
};
hashAlgorithm('md5');