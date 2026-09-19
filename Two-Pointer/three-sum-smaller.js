// Triplets with Smaller Sum

// Given an array arr[] of distinct integers and an integer sum, count the number of unique triplets of elements whose sum is strictly less than sum. A triplet is identified only by the three elements it contains, so different permutations of the same three elements are counted as one triplet.

// Examples :

// Input: sum = 2, arr[] = [-2, 0, 1, 3]
// Output:  2
// Explanation: Triplets with sum less than 2 are (-2, 0, 1) and (-2, 0, 3). 
// Input: sum = 12, arr[] = [5, 1, 3, 4, 7]
// Output: 4
// Explanation: Triplets with sum less than 12 are (1, 3, 4), (5, 1, 3), (1, 3, 7) and (5, 1, 4).
// Constraints:

// 1 ≤ sum ≤ 105
// 3 ≤ arr.size() ≤ 103
// -103 ≤ arr[i] ≤ 103

/**
 * @param {number} sum
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    countTriplets(sum, arr) {
        arr.sort((a, b) => a -b);
        const n = arr.length;
        let uniqueTriplets = 0;
        for(let i = 0; i < n; i++) {
            let p1 = i+1;
            let p2 = n-1;
            while(p1<p2) {
                const tripletSum = arr[i] + arr[p1] + arr[p2];
                if(tripletSum >= sum) {
                    p2--;
                } else {
                    uniqueTriplets+=p2-p1;
                    p1++;
                }
            }
        }
        return uniqueTriplets;
    }
}

const sol = new Solution();

console.log(sol.countTriplets(2, [-2, 0, 1, 3]))