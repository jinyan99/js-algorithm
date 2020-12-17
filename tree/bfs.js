const tree = {
	val: 'a',
	children: [
		{
			val: 'b',
			children: [
				{
					val: 'd',
					children: []
				},
				{
					val: 'e',
					children: []
				}
			]
		},
		{
			val: 'c',
			children: [
				{
					val: 'f',
					children: []
				},
				{
					val: 'g',
					children: []
				}
			]
		}
	]
};

// 根据广度优先遍历算法口诀演算
const bfs = root => {
	// 第一步，新建队列，把根节点入队
  const q = [root];

	while (q.length > 0) {
    // 第二步，队头出队并访问
		const n = q.shift();
    console.log(n.val);
    // 第三步，队头的children挨个去访问并入队
		n.children.forEach(child => {
			q.push(child);
		});
	}
};

bfs(tree);
