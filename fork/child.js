process.on('message',function(m){
  console.dir(m);
});
process.send({got:'that'});