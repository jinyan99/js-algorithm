class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 两个节点调换位置移动操作
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  getParentIndex(i) {
    // 左移位是2的N次方 右移位是除以2的N次方 取商去余
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
    // 当前插入节点在数组中的下标
    if (index == 0) return;
    // 获取父节点
    const parentIndex = this.getParentIndex(index);
    // 若父节点值大于插入节点值就给当前节点向上移动swap方法，然后再递归判断是否需要继续上移
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    // 左子节点下标
    const leftIndex = this.getLeftIndex(index);
    // 右子节点下标
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

  // 插入堆顶
  insert(value) {
    this.heap.push(value);
    // 上移操作 把这个值移到合适的位置
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  pop() {
    // 不能直接删除堆顶数组元素 会紧凑过来 必须先替换尾部元素到o位然后一直下移下去
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