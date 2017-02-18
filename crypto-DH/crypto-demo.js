const crypto = require('crypto');

let ming = crypto.createDiffieHellman(512);
// 秘密整数a
let ming_keys = ming.generateKeys();

// g为底数，p为一个素数
let prime = ming.getPrime();
let generator = ming.getGenerator();

let hong = crypto.createDiffieHellman(prime, generator);
// 秘密整数b
let hong_keys = hong.generateKeys()

let ming_secret = ming.computeSecret(hong_keys);
let hong_secret = hong.computeSecret(ming_keys);

console.log(ming_secret.toString('hex') === hong_secret.toString('hex'));

// // print secret:
// console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
// console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));