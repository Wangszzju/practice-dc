const lilei = { name: 'lilei' };
const hanmeimei = { name: 'hanmeimei' };

const map = new Map([[ lilei, { sex: 1 } ], [ hanmeimei, { sex: 2 } ]]);

// 查找
console.log(map.get(lilei));

// 验证
console.log(map.delete(hanmeimei));
console.log(map.has(hanmeimei));

// 清除
console.log(map.size);
map.clear();
console.log(map.size);

