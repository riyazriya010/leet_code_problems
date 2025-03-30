/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let minInt = -(2 ** 31)
    let maxInt = 2 ** 31 -1
    let reversedInt = ''
    let isNegative = (x < 0) ? -1 : 1
    x = Math.abs(x)
    while(x > 0){
        reversedInt += x % 10
        x = Math.floor(x / 10)
        //check  weather the result within the 32 bit integer
        if(reversedInt < minInt || reversedInt > maxInt) return 0
    }
    return Number(reversedInt) * isNegative
};
const x = 123
console.log(reverse(x))





