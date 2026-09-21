// 1004. Max Consecutive Ones III

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    if(k<1) return k;
    const n = nums.length;
    const cons = [0, 0];
    let low = 0;
    let res = -Infinity;

    for (let high = 0; high < n; high++) {
        cons[nums[high]]++;
        let len = high - low + 1;
        let maxCount = cons[1];
        let diff = len - maxCount;
        while (diff > k) {
            cons[nums[low]]--;
            low++;
            len = high - low + 1;
            maxCount = cons[1];
            diff = len - maxCount;
        }
        len = high - low + 1;
        res = Math.max(res, len);
    }

    return res;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2));