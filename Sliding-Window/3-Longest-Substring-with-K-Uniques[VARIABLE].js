// Longest Substring with K Uniques

// You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring that contains exactly k distinct characters.

// Note : If no such substring exists, return -1. 

// Examples:

// Input: s = "aabacbebebe", k = 3
// Output: 7
// Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.
// Input: s = "aaaa", k = 2
// Output: -1
// Explanation: There's no substring with 2 distinct characters.
// Input: s = "aabaaab", k = 2
// Output: 7
// Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b', making it the longest valid substring.
// Constraints:

// 1 ≤ s.size() ≤ 105
// 1 ≤ k ≤ 26

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestKSubstr(s, k) {
        const str = s.split("");
        const n = str.length;
    
        let low = 0;
        let freq = new Map();
        let longestStrLen = -1
        
        for(let high = 0; high < n; high++) {
            freq.set(str[high], (freq.get(str[high]) || 0) + 1);
            while(freq.size > k) {
                freq.set(str[low], (freq.get(str[low]) || 0) - 1);
                if(freq.get(str[low]) <= 0) {
                    freq.delete(str[low]);
                }
                low++;
            }
            if(freq.size == k) {
                longestStrLen = Math.max(longestStrLen, high - low + 1);
            }
        }

        return longestStrLen;
    }
}

const sol = new Solution();
console.log(sol.longestKSubstr("aabaaab", 2));

