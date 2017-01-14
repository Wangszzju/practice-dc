const os = require('os');
const networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces['en1'][1].address);