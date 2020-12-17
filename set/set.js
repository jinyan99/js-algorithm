let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
mySet.add('some text');
let o = { a: 1, b: 2 };
mySet.add(o);
mySet.add({ a: 1, b: 2 });

const has = mySet.has(o);

mySet.delete(5);

// 如何迭代一个方法
// 1- forof方法是可以正常迭代即循环我们set集合的（mySet.keys ,mySet.values,key与value是一样的）
for(let [key, value] of mySet.entries()) console.log(key, value);

// set转化成Array
const myArr = Array.from(mySet);

//array转化成Set
const mySet2 = new Set([1,2,3,4]);


// 求交集
const intersection = new Set([...mySet].filter(x => mySet2.has(x)));
// 求差集（如求set2里有set1没有的值）
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));
