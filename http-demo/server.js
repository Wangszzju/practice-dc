let http = require('http');
let i = 0;

let server = http.createServer(function(req,res){
  res.writeHead(200,{'Content-type':'text/plain'});
  console.log(`${i}`,req.url);
  i++;
  res.write('Hey～')
  res.end('Hello World');
}).listen(1327,'127.0.0.1');
console.log('Server running in 127.0.0.1:1327');