/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let items = arr1.concat(arr2);

    let ans = {};

    for (const it of items) {
        if (!ans[it.id]) {
            ans[it.id] = it;
            continue;
        }

        ans[it.id] = { ...ans[it.id], ...it };
    }

    return Object.values(ans);
};