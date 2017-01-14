'use strict';

let fs = require('fs');

let ws1 = fs.createWriteStream('output1.txt','utf8');
ws1.write('亲爱的');
ws1.write(' 爱上你 从那天起\n');
ws1.write('甜蜜的 很轻易\n');
ws1.end();