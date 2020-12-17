const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a;//先声明个指针 初始指向a
while (p) {
    console.log(p.val);
    p = p.next;//改变指针指向
}

// 插入
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除
c.next = d;

// 增删改都是只改变next指向即可