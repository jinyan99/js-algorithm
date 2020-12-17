Array.prototype.binarySearch = function (item) {
  // 我们先假设数组是有序的排好序的
  let low = 0;// 要搜索数的最小下标
  let high = this.length - 1;// 要搜索数的最大下标
  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = this[mid];
    if (element < item) {
      low = mid + 1;
    }
    else if (element > item) {
      high = mid - 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}
const res = [1,2,3,4,5].binarySearch(0)