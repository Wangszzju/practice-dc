const lilei = { name: 'lilei' };
const hanmeimei = { name: 'hanmeimei' };

const map = new Map([[ lilei, { sex: 1 } ], [ hanmeimei, { sex: 2 } ]]);

// 迭代
map.forEach((value , key) => {
  console.log(value);
});

console.log(map);