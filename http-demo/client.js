let http = require('http');

let option = {
  hostname:'127.0.0.1',
  port:1327,
  path:'/i/get-fb-detail',
  method:'GET'
}

let req = http.request(option, function(res){
  console.log(res.statusCode);
  // console.log(res.headers);
  res.setEncoding('utf8');
  res.on('data',function(chunk){
    console.log(chunk);
  })
});
console.log(req.path);
req.end();