/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (tmp) => {
            if (val === tmp){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: (tmp) => {
            if (val !== tmp){
                return true;
            }
            else{
                throw new Error("Equal");
            }
        }
    }
};


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"