/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
    const stack = [...arr.map(item => [item, depth])];
    const ans = [];

    while (stack.length > 0) {
        const [item, depth] = stack.pop();

        if (Array.isArray(item) && depth > 0) {
            stack.push(...item.map(obj => [obj, depth - 1]));
        } else {
            ans.push(item);
        }
    }

    return ans.reverse();

};