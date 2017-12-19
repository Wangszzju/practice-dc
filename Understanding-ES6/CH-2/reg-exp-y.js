const text = 'hello1 hello2 hello3';

const pattern = /hello\d\s?/;
const globalPattern = /hello\d\s?/g;
const stickyPattern = /hello\d\s?/y;

pattern.lastIndex = 1;
globalPattern.lastIndex = 1;
stickyPattern.lastIndex = 1;

let result = pattern.exec(text);
let globalResult = globalPattern.exec(text);
let stickyResult = stickyPattern.exec(text);  // 从位置1开始匹配

stickyPattern.lastIndex = 7;
stickyResult = stickyPattern.exec(text);