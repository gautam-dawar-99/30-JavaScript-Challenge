/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const memo = {};
    return function (...args) {
        const params = JSON.stringify(args);
        if (params in memo) {
            return memo[params];
        }
        const ans = fn(...args);
        memo[params] = ans;
        return ans;

    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1 
