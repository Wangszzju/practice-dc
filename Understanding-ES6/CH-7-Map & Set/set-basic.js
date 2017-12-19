const lilei = { name: 'lilei' };
const hanmeimei = { name: 'hanmeimei' };

// 创建
const numSet = new Set([1, 2, 4, 4, 5, 5, 7, 8, 9]);
const objSet = new Set([lilei, hanmeimei])

// 添加
numSet.add(...[10, 12]);  // 12不会被加入，也许是因为add方法不接受多个参数
numSet.add([10,12]);

// 存在性检查
numSet.has(10);  // true
numSet.has(12);  // false
objSet.has(lilei);  // true

// 删除操作
objSet.delete(lilei);
objSet.has(lilei);  // false
numSet.clear(); // 完全清除

// 不可直接使用索引
objSet.size;  // 1
objSet[0];  // undefined

