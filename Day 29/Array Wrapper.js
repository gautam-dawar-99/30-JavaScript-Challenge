/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.array = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    const array = this.array;

    const sum = array.reduce((pre, cur) => {
        return pre + cur;
    }, 0);

    return sum;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    return JSON.stringify(this.array)
}

  const obj1 = new ArrayWrapper([1,2]);
  const obj2 = new ArrayWrapper([3,4]);
  console.log(obj1 + obj2); // 10
  console.log(String(obj1)); // "[1,2]"
  console.log(String(obj2)); // "[3,4]"
 