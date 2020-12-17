Array.prototype.bubbleSort = function () {
	for (let i = 0; i < this.length - 1; i++) {
    // 让子循环j变量每次都减去一个i，因为拍完一次后倒数i位都是最大的已经排好的，所以让他每次区间动态减小
		for (let j = 0; j < this.length - 1 - i; j++) {
			console.log(this[j], this[j + 1]);
			if (this[j] > this[j + 1]) {
				// 进行交换
				const temp = this[j];
				this[j] = this[j + 1];
				this[j + 1] = temp;
			}
		}
	}
};
// 上边就是先写子循环，然后再向上补充外循环
// 写排序算法涉及到循环嵌套，循环嵌套逻辑很绕，单循环与嵌套循环通用的
// 一个编写技巧就是先写外循环中单次要做的逻辑，单次要做的逻辑写清楚之
// 后，然后向外补充外循环逻辑，多次外循环做那个单次逻辑的事
const arr = [5, 4, 3, 2, 1];
arr.bubbleSort();
