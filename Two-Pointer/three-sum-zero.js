// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 
// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105



/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// [-1,0,1,2,-1,-4]
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    const n = nums.length;
    const triplets = [];

    for(let i = 0; i < n-2; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue;
        let p1 = i+1;
        let p2 = n-1;
        // const sum = -1 * nums[i];
        const sum = 0;
        while(p1 < p2) {
            const pair = nums[p1] + nums[p2] + nums[i];
            if(pair === sum) {
                triplets.push([nums[i], nums[p1], nums[p2]]);
                p1++;
                p2--;
                while(p1<n && nums[p1] === nums[p1-1]){
                    p1++;
                }
                while(p2>=0 && nums[p2] === nums[p2+1]){
                    p2--;
                }
            }
            else if (pair > sum) {
                p2--;
            }
            else {
                p1++;
            }
        }
    }

    return triplets;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
