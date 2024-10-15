/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let cnt=0;
    for(let i=0;i<args.length;i++){
        cnt++;
    }
    // alternate or shortcut
    // return args.length;
    // console.log(args.length);
    return cnt;
};


console.log(argumentsLength(1, 2, 3)); // 3
console.log(argumentsLength(1, "qwerty", "",'a','ab',"1234")); // 6
