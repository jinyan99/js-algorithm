const bt = require('./bt');

// 拿到二叉树进行后序遍历
const postorder = (root) => {
    if (!root) { return; }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
};

/**
 * 后序遍历非递归版 后序有点复杂实现递归思路
 *
 * 1- 先把后序遍历的顺序给倒置一下
 * 2- 然后利用先序遍历的算法逻辑实现它逆序的访问
 * 3- 然后再利用栈的后进先出的特性把刚才那个先序遍历的那个顺序倒过来再重新访问下就行了
 * 4- 所有我们这次模拟需要两个栈
 *      一个是帮助我们先序遍历的那个栈stack
 *      另一个是用来倒置的栈outputStack
 */
const postorder1 = (root) => {
    if (!root) { return; }
    const outputStack = [];
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n);
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    while(outputStack.length){
        const n = outputStack.pop();
        console.log(n.val);
    }
};

postorder(bt);