const util = require('util');

console.log(util.isArray([1,2,3])?'是数组':'不是数组');

console.log(util.isDate(new Date())?'是Date':'不是Date');

