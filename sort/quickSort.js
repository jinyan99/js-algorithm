Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    // 分别用来存放基准前后的数组
    const left = [];
    const right = [];
    // 初设的基准
    const mid = arr[0];
    // 分区操作
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      }
      else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];

  };
  const res = rec(this);
  res.forEach((n, i) => {this[i] = n});
};

const arr = [5, 4, 3, 2, 1];
arr.quickSort();