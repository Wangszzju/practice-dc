let lilei = { name: 'lilei' };
let hanmeimei = { name: 'hanmeimei' };

const map = new WeakMap([[lilei, { sex: 1 }], [hanmeimei, 'It\'s a Girl']]);
// map.set(lilei, { sex: 1 });
// map.set(hanmeimei, 'It\'s a Girl');

lilei = null;
console.log(map); // 好像lilei没有被清除掉，但确实无法使用WeakMap.prototype.get了

let six = new Number(6);
map.set(six, 666);
console.log(map);  // 好像lilei没有被清除掉

hanmeimei = null;
console.log(map);  // 似乎hanmeimei也没有被清除掉

let seven = new Number(7);
map.set(seven, 777);
console.log(map); // 似乎hanmeimei也没有被清除掉