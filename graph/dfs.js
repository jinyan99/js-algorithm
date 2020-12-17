// 导入邻接表这个图
const graph = require('./graph');

// 深度遍历--要求根节点的没访问过的相邻节点挨个进行深度优先遍历
const visited = new Set();
const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach(c => {
        if(!visited.has(c)){
            dfs(c);
        }
    });
};

dfs(2);// 打印出2013
//从图的2节点处开始进行遍历图，2节点链接0和3，对0和3进行递归遍历，搜索0连接的是1和2