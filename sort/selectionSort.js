Array.prototype.selectionSort = function () {
	for (let i = 0; i < this.length - 1; i++) {
		let indexMin = i;
		for (let j = i; j < this.length; j++) {
			if (this[j] < this[indexMin]) {
				// 找到最小值的下标
				indexMin = j;
			}
		}
		// 拿最小值进行交换
		if (indexMin !== i) {
			const temp = this[i];
			this[i] = this[indexMin];
			this[indexMin] = temp;
		}
	}
};

// 上边就是先写子循环，然后再向上补充外循环
// 写排序算法涉及到循环嵌套，循环嵌套逻辑很绕，单循环与嵌套循环通用的
// 一个编写技巧就是先写外循环中单次要做的逻辑，单次要做的逻辑写清楚之
// 后，然后向外补充外循环逻辑，多次外循环做那个单次逻辑的事
const arr = [5, 4, 3, 2, 1];
arr.bubbleSort();
