/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // this takes constant O(1) to make hashtable
    const set = new Set(nums)
    let longestConsec = 0

    // this loop takes linear O(n)
    for(let num of nums){
        if(!set.has(num - 1)){
            let currentNum = num
            let currentSec = 1

            // this takes constant O(1) to check in hashTable
            while(set.has(currentNum + 1)){
                currentNum++
                currentSec++
            }

            longestConsec = Math.max(longestConsec, currentSec)
        }
    }
    return longestConsec
}
const nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))

