Array.prototype.mergeSort = function() {
  const rec = (arr) => {
    //先把数组分成左右2半
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    const res = [];
    while(orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
      }
      else if (orderLeft.length) {
        res.push(orderLeft.shift());
      }
      else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res;
  };
  const res = rec(this);
  // 改变this里的值说明是改变原数组的，要想不改变原数组的return res即可
  res.forEach((n,i) => {this[i] = n;});
}

const arr = [5,4,3,2,1];
arr.mergeSort();
