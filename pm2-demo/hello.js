let http = require('http');
let server = http.createServer(function(req,res){
  // res.writeHead(200,{'Content-Type':'text/plain'});
  res.writeHead(200, { 'Content-Type': 'text/plain' }); 
  res.write('2333：~~~~')
  res.write(`${JSON.stringify(process.env)}`);
  res.end('Hello World');
});
server.listen(8081,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8081/');
