class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  getParentIndex(i) {
    // 取商的最简洁方法--把二进制的数字往右边移一位(即除以2取商)
    // 相当于Math.floor((i-1)/2)
    return (i - 1) >> 1;
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  shiftUp(index) {
    if (index == 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)//要是不对就左侧子节点和当前子节点进行交换
      this.shiftDown(leftIndex) //交换完继续下移
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)//要是不对就右侧子节点和当前子节点进行交换
      this.shiftDown(rightIndex) //交换完继续下移
    }
}

  insert(value) {
    this.heap.push(value);
    // 上移操作 把这个值移到合适的位置
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    if (this.size() === 1) return this.heap.shift();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);//下移操作
    return top;
  }

  // 获取堆顶
  peek() {
    return this.heap[0];
  }

  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}


const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
// 测验插入方法可以F5断点看一下很清晰