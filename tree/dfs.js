const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                }
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                },
                {
                    val: 'g',
                    children: [],
                }
            ],
        }
    ],
};

// 开始进行深度优先遍历，根据口诀只有2行代码
const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
};

dfs(tree);