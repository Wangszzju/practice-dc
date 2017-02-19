const rewire = require('rewire');
const target = rewire('./target.js');

let privateName = target.__get__('privateName');
privateName('你这个傻逼');