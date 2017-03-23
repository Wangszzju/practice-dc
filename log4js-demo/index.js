let log4js = require('log4js');
// log4js.configure({
//   appenders:[{
//     type:'dateFile',
//     filename:'demo.log',
//     pattern:'-yyyy-MM-dd',
//     alwaysIncludePattern:false,
//     category:'test'
//   },{
//     type:'dateFile',
//     filename:'demo.log',
//     pattern:'-yyyy-MM-dd',
//     alwaysIncludePattern:true,
//     category:'explore'
//   }]
// });
log4js.configure({
  appenders:[{
    type:'console',
    layout:{
      type: 'pattern',
      pattern:'[%r] [%[%5.5p%]] - %m%n'
    }
  }]
})
let logger = log4js.getLogger();
logger.debug('Time:',new Date());