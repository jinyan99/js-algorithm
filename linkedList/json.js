const json = {
    a: { b: { c: 1 } },
    d: { e: 2 },
};

const path = ['a', 'b', 'c'];

// 我们要做的就是沿着path的路径，去求c最后对应的值是多少
// 原理还是遍历链表的原理，p是指针

let p = json; // 建个指针指向头部
path.forEach((k) => {
    p=p[k];
});