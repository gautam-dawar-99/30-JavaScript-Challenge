/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {

    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        functions.forEach((fn, index) => {
            fn()
                .then(val => {
                    results[index] = val; // Store results at the correct index
                    completed++;
                    if (completed === functions.length) {
                        resolve(results); // Resolve only when all promises complete
                    }
                })
                .catch(reject); // Immediately reject if any promise fails
        });
    });

};

const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]
