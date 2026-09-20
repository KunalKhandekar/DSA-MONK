// Max Sum Subarray of size K

// Given an array of integers arr[]  and a number k. Return the maximum sum of a subarray of size k.

// Note: A subarray is a contiguous part of any given array.

// Examples:

// Input: arr[] = [100, 200, 300, 400], k = 2
// Output: 700
// Explanation: arr2 + arr3 = 700, which is maximum.
// Input: arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
// Output: 39
// Explanation: arr1 + arr2 + arr3 + arr4 = 39, which is maximum.
// Input: arr[] = [100, 200, 300, 400], k = 1
// Output: 400
// Explanation: arr3 = 400, which is maximum.
// Constraints:

// arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 106
// 1 ≤ k ≤ arr.size()

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSubarraySum(arr, k) {
        const n = arr.length;
        let low = 0;
        let high = k-1;
        let sum = 0;
        let maxSum = 0;

        // FIRST FIXED WINDOW
        for(let i = 0; i <= high; i++) {
            sum += arr[i];
        }

        while(high<n) {
            maxSum = Math.max(maxSum, sum);
            low++;
            high++;
            if(high == n) break;
            sum = sum - arr[low-1] + arr[high]; 
        }

        return maxSum;
    }
}

const sol = new Solution();

console.log(sol.maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));