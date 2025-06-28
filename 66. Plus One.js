/**
 * @param {number[]} digits
 * @return {number[]}
 * 

 Example:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
 
 */
var plusOne = function (digits) {
    let str = digits.join('')
    let num = BigInt(str) + 1n // BigInt for Handle Large Number
    return num.toString().split('').map(n => Number(n))
};
const digits = [1, 2, 3]
console.log(plusOne(digits));

