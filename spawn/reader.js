let fs = require('fs');
fs.readdir('./tpl',(err,data)=>{
  if(err) throw err;
  console.log(data);
});
