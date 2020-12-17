// 导入图数据结构
const graph = require('./graph');
// 进行广度遍历
const visited = new Set();
visited.add(2);
const q = [2];
while (q.length) {
    const n = q.shift();
    console.log(n);
    // visited.add(c);不在这入队，有可能会出重复元素的bug
    graph[n].forEach(c => {
        if (!visited.has(c)) {
            q.push(c);
            visited.add(c);
        }
    });
}
