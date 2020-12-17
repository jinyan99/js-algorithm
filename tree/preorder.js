const bt = require('./bt');// commonjs方式引入模块

// 对拿到的二叉树，进行先序遍历
const preorder = (root) => {
    // 避免访问到null报错
    if (!root) { return; }
    // 1-先访问根节点
    console.log(root.val);
    // 2-然后访问它的左子树
    preorder(root.left);
    // 3-然后访问它的右子树
    preorder(root.right);
};


// ========== 用堆栈模拟递归实现先序遍历 =========
const preorder1 = (root) => {
    if (!root) { return; }
    // 新建函数的调用堆栈
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        console.log(n.val);
        // 适配先进后出
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
    }
};

preorder(bt);