// 16. 3Sum Closest

// You are given an integer array nums of length n and an integer target.

// Find three integers at distinct indices in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.


// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [ -4, -1, 1, 2 ]
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let closestSum = Infinity;

    for(let i = 0; i < n; i++){
        let p1 = i+1;
        let p2 = n-1;
        while(p1 < p2) {
            const sum = nums[i] + nums[p1] + nums[p2];
            if(Math.abs(closestSum - target) > Math.abs(sum - target)) {
                closestSum = sum;
            }
            if(sum === target) {
                return sum;
            } else if (sum > target){
                p2--;
            } else {
                p1++;
            }
        }
    }

    return closestSum;
};

console.log(threeSumClosest([0,0,0], 1))