const bt = require('./bt');

// 拿到二叉树进行中序遍历
const inorder = (root) => {
    if (!root) { return; }
    // 1-左子树
    inorder(root.left);
    // 2-根节点
    console.log(root.val);
    // 3-右节点
    inorder(root.right);
};

const inorder1 = (root) => {
    if (!root) { return; }
    // 也是用一个堆栈，需要先遍历左子树，所以得需要一个指针跟踪
    const stack = [];
    let p = root;


    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
};

inorder(bt);