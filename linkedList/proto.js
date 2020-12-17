// 给这个文件打断点就能看到它的原型链链表关系（点住断点按F5）
const obj = {};
const func = () => {};
const arr = [];

const obj = {};
Object.prototype.x = 'x';

const func = () => {};
Function.prototype.y = 'y';

// 打印func.y 为‘y’，func.x 为 'x'。。。





const instanceOf = (A, B) => {
  // 思路是如果能在A的原型链上找到B的原型对象就返true
  let p = A;
  while(p) {// 遍历链表类似
    if (p === B.prototype) return true;
    p = p.__proto__;
  }
  return false;
}

//使用时就直接 instanceOf([], Object) 会返回true