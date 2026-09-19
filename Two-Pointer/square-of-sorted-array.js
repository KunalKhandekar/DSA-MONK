// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const pos = [];
    const neg = [];
    const sorted = [];

    nums.map(n => {
        if(n>=0)pos.push(n*n);
        else neg.push(n*n);
    })

    if(neg.length === 0) return pos;
    else neg.reverse();

    let p1 = 0;
    const m = pos.length;
    let p2 = 0;
    const n = neg.length;

    while(p1 < m && p2 < n) {
        if(pos[p1] < neg[p2]){
            sorted.push(pos[p1++]);
        } else {
            sorted.push(neg[p2++]);
        }
    }

    while(p1 < m) {
        sorted.push(pos[p1++]);
    }

    while(p2 < n) {
        sorted.push(neg[p2++]);
    }

    return sorted;
};

console.log(sortedSquares([-7,-3,2,3,11]))

