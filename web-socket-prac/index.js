const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
  port:3000
});

// 处理接入
wss.on('connection',function(ws){
  console.log(`[SERVER] connection`);
  // 响应消息
  ws.on('message',function(message){
    console.log(`[SERVER] Received: ${message}`);
    // 收到消息之后主动发消息给客户端
    ws.send(`ECHO:${message}`,(err)=>{
      if(err){
        console.log(`[SERVER] error:${err}`);
      }
    });
  });
});