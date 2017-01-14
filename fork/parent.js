let fork = require('child_process').fork;
let messenger = fork('./child.js');

messenger.on('message',function(m){
  console.log(`Parent got a message${m}`);
});

messenger.send({hello:'world'});
