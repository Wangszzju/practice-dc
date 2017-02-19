
const WebSocket = require('ws');

let ws = new WebSocket('ws://localhost:3000/test');

ws.on('open',function(){
  console.log('[Client] open()!!!!');
  ws.send('I\'m Client!')
});

ws.on('message',function(message){
  console.log(`[Client] Received ${message}`);
});