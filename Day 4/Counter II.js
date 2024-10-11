// problem link : https://leetcode.com/problems/counter-ii/description/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let tmp = init;
    return {
        increment:()=> ++tmp,
        decrement:()=> --tmp,
        reset:()=> tmp = init
    }
};


const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4