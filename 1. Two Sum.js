/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};

const nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))

// nums = [3,2,4], target = 6
// nums = [3,3], target = 6

